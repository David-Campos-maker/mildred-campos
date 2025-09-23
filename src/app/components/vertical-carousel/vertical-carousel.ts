import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Work {
  title: string;
  path: string;
}
  
@Component({
  selector: 'app-vertical-carousel',
  imports: [CommonModule],
  templateUrl: './vertical-carousel.html',
  styleUrls: ['./vertical-carousel.scss']
})
export class VerticalCarouselComponent {
  public works: Work[] = [
    {
      title: 'Identidade Visual - Marca A',
      path: 'works/Poster-1.png' // Substitua pelo caminho real
    },
    {
      title: 'Website - Empresa B',
      path: 'works/Poster-2.png' // Substitua pelo caminho real
    },
    {
      title: 'Campanha de Marketing - Produto C',
      path: 'works/Poster-1.png' // Substitua pelo caminho real
    },
    {
      title: 'Design de Embalagem - Item D',
      path: 'works/Poster-2.png' // Substitua pelo caminho real
    }
  ];

  public currentIndex = 0;

  public next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.works.length;
  }

  public prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.works.length) % this.works.length;
  }
}
