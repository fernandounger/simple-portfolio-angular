import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  personalInformation = {
    name: 'Fernando Unger',
    home: "Duque de Caxias - RJ",
    office: 'Front-End Developer',
    email: 'fdasilvaunger@gmail.com'
  }
  
  experience = {
    nilsenBoutique : {
      name: 'Nilsen Boutique',
      website: 'https://www.nilsenatacado.com.br/',
      resume: 'Responsible for the implementation, support and maintenance of the fashion e-commerce for the Tray Platform and Integrated Store'
    },
    officeClean: {
      name:'Office Clean',
      website: 'https://github.com/fernandounger/officeclean',
      resume: 'Inventory control system, where I worked in a group to design, develop and test a corporate computing system using Bootstrap and Java.'
    }
  }

  course = {
    name: 'Computer Technician',
    institution: 'Senac RJ',
    resume: 'Technician focused on planning, building, publishing, testing and maintaining web and mobile applications.',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
