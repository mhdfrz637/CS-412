import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Quotes} from "./quotes.model";

@Injectable({providedIn: 'root'})
export class QuotesService {
  // @ts-ignore
  private quotes: Quotes = {"quote":'', "author":''}
  private quotesUpdated = new Subject<Quotes>();

  constructor(private http: HttpClient) {

  }

  getQuotes() {
    this.http.get<{quotes:Quotes}>('https://quotes-api-self.vercel.app/quote').subscribe((payLoad: any)=>{
      // console.log(payLoad);
      this.quotes = payLoad;
      this.quotesUpdated.next(this.quotes);
    });
  }

  getUpdatedQuotes() {
    return this.quotesUpdated.asObservable();
  }

}
