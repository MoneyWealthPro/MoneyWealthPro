import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-a-story',
  templateUrl: './a-story.component.html',
  styleUrls: ['./a-story.component.css']
})
export class AStoryComponent implements OnInit {
  storyForm!: FormGroup;
  constructor(
    private fb: FormBuilder,  
    private dialog: MatDialog,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.storyForm  = this.fb.group({
      testimony: ['', [Validators.required]],
    })
  }
 // Close
 close() {
  this.dialog.closeAll();
 }
  // Function to update or tell a story
  updateStory() {
    this.profileService.uploadStory(this.storyForm.value).subscribe((res: any) => {
      this.storyForm.reset();
      this.dialog.closeAll();
    },(err: any) => {
    })
  }
}
