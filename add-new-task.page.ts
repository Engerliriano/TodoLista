import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
    this.categorias.push("Trabajo");
    this.categorias.push('Personal')
    this.categorias.push('Hogar')
    this.categorias.push('Hobbie')
  }

  categorias: any= []
  

  newTaskObj={}
  nameTask: any
  dateTask: any
  priorityTask: any
  categoryTask : any
  objetTask: any

  async dismis() {
    await this.modalCtrl.dismiss(this.objetTask)
  }

  selectCategory(index:any){
    this.categoryTask = this.categorias[index]
  }


  buttonAdd(){
    this.objetTask = ({
      nameItem:this.nameTask, 
      dateItem:this.dateTask,
      priorityItem:this.priorityTask,
      categoryItem:this.categoryTask
    })
    
    this.dismis()
  }


}import { TodoService } from '../todo.service';

