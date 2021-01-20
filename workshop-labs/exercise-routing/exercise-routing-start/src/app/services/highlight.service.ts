import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  public importantStuff: string = '';

  public checkImportant(skills: string): boolean {

    if (this.importantStuff.length === 0) {
      return false;
    }

    const importantSkills: string[] = this.importantStuff.split(" ");

    for (const skillToCheck of importantSkills) {
      if (skills.indexOf(skillToCheck) >=0 )
        return true;
    }
    return false;
  }

  constructor() { }
}
