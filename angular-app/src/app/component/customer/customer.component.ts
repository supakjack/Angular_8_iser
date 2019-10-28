import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private code:number
  private name:string
  private email:string
  private edu:{major:string,faculty:string,university:string}
  private skills:string[]

  constructor() { }

  ngOnInit() {
    this.code = 60160027
    this.name = "Supak Pukdam"
    this.email = "60160027@go.buu.ac.th"
    this.edu = {major:"SE",faculty:"IF",university:"BUU"}
    this.skills = ["HTML","CSS","JS","RUBY"]
    console.log("ngOnInit-CustomerComponent")
  }

  addSkill(skill){
    this.skills.unshift(skill)
    return false
  }

  removeSkill(skill){
    this.skills.forEach((element , index) => {
      if(element==skill){
        this.skills.splice(index,1)
      }
    });
  }

}
