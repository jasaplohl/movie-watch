import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})

export class EpisodesComponent implements OnInit, OnChanges {
  @Input() declare episodes: any;

  current_page: number;
  total_pages: number;
  displayedEpisodes: any;
  readonly items_per_page = 10;

  constructor(public service: ImageService) {
    this.current_page = 1;
    this.total_pages = 1;
  }

  ngOnInit(): void {
    this.total_pages = this.getTotalPages();
    this.getEpisodesForCurrentPage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.current_page = 1;
    this.total_pages = this.getTotalPages();
    this.getEpisodesForCurrentPage();
  }

  getTotalPages(): number {
    return Math.ceil(this.episodes.length / this.items_per_page);
  }

  onPageChange(newPage: number, anchor: HTMLElement): void {
    this.current_page = newPage;
    this.getEpisodesForCurrentPage();
    anchor.scrollIntoView({behavior: 'smooth'});
  }

  getEpisodesForCurrentPage(): void {
    const lowerLimit = (this.current_page-1)*this.items_per_page;
    const upperLimit = this.current_page*this.items_per_page;
    this.displayedEpisodes = this.episodes.slice(lowerLimit, upperLimit);
  }

}
