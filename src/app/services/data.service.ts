import { HttpClient } from '@angular/common/http';
import { catchError, map  } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


export class DataService {
  

  constructor(private url :string, private http: HttpClient) { 

  }


  getAll(){
    return this.http.get(this.url)
     .pipe(catchError(this.handleError));
  }

  create(resource){
    return this.http.post<any>(this.url,resource)
    .pipe(catchError(this.handleError));
  }

  update(resource){
    return this.http.patch(this.url+'/'+resource.id,{isRead : true})
    .pipe(catchError(this.handleError));
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
    .pipe(catchError(this.handleError));
  }

  private handleError(err : any){
    if(err.status ===400)
    return throwError(new BadInput);

    if (err.status === 404)
    return  throwError(new NotFoundError);

  return throwError(new AppError(err));

  }

}
