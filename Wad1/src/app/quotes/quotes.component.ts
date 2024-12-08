import {Component, OnInit} from '@angular/core';
import {Quotes} from "./quotes.model";
import {Subscription} from "rxjs";
import {QuotesService} from "./quotes.service";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes = {"quote":'', "author":''};
  private quotesSub: Subscription;

  constructor(private quotesService: QuotesService) {
    this.quotesSub = new Subscription();
  }

  ngOnInit() {
    this.quotesService.getQuotes();
    this.quotesSub = this.quotesService.getUpdatedQuotes().subscribe((quotes: Quotes) => {
      this.quotes = quotes;
      // console.log("from the console.quotes:", quotes);

    });
  }
}
