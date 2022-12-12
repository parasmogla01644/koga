import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame-info',
  templateUrl: './frame-info.component.html',
  styleUrls: ['./frame-info.component.scss'],
})
export class FrameInfoComponent implements OnInit {
  @Input() carouselID: string = 'imagesCarousel';
  @Input() imagesCarousel: any[] = [
    {
      src: '/assets/images/foto.jpg',
      title: 'Foto',
      active: true,
    },
    {
      src: '/assets/images/foto.jpg',
      title: 'Foto',
      active: false,
    },
    {
      src: '/assets/images/foto.jpg',
      title: 'Foto',
      active: false,
    },
  ];
  @Input() description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna massa ut sed nibh quis ultrices quis. Sem aenean neque, vel morbi scelerisque vitae ultrices nisl sit. Neque sapien mauris non lacinia non sed ut. Velit morbi arcu cras vulputate aliquam id. Mi mauris amet nibh lobortis. Eget consequat at et molestie aliquet a. Risus vivamus eget et aliquet mattis quis egestas at. Pretium nunc pretium sit a erat curabitur in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna massa ut sed nibh quis ultrices quis. Sem aenean neque, vel morbi scelerisque vitae ultrices nisl sit. Neque sapien mauris non lacinia non sed ut. Velit morbi arcu cras vulputate aliquam id. Mi mauris amet nibh lobortis. Eget consequat at et molestie aliquet a. Risus vivamus eget et aliquet mattis quis egestas at. Pretium nunc pretium sit a erat curabitur in.';

  constructor() {}

  ngOnInit(): void {}
}
