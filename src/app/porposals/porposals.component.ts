import { Component } from '@angular/core';

@Component({
  selector: 'app-porposals',
  templateUrl: './porposals.component.html',
  styleUrls: ['./porposals.component.scss']
})
export class PorposalsComponent {
names = ['Mario', 'Ben', 'Teresa', 'Lucia'];
text = ['34 Years', '445 Years', '768 Years', '484 Years'];
images = ['assets/img/hamster-bella.jpg', 
'assets/img/hamster-bella-due.jpg', 
'assets/img/hamster-eat.jpg', 
'assets/img/hamster-house.jpg']
}
