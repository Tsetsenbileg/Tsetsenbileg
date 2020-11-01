class DatePicker {
  constructor(id, f) {
    this.id = id;
    this.func = f;
    this.fixedDate = {};
  }
  render(date){
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.fixedDate.year = date.getFullYear();
    this.fixedDate.month = date.getMonth();
    this.fixedDate.day = date.getDate();
    this.cont = document.getElementById(this.id);
    let calDiv = document.createElement("div");
    calDiv.setAttribute("id", "calendar");
    let h = document.getElementsByTagName("h1");
    for(let i=0; i<h.length; i++){ 
      h[i].remove();
    }
    this.cont.innerHTML = `<div><img id = "prev" src = "back (1).svg"><span>${months[this.fixedDate.month]} ${this.fixedDate.year}</span><img id = "next"src = "next.svg"> </div>`;
    this.drawDays();
    this.cont.appendChild(calDiv);
    this.drawAllDays(date);
    // next bolon prev tovchin deer event nemsen ni
    let prev = this.cont.firstChild.firstChild;
    let next = this.cont.firstChild.lastChild.previousSibling;
    prev.addEventListener("click", ()=>{this.prevMonth(date);});
    next.addEventListener("click", ()=>{this.nextMonth(date);});
    this.func(this.id,this.fixedDate);
    this.cont.firstChild.setAttribute("class", 'header');
  }
  rerender(date){
    this.fixedDate.year = date.getFullYear();
    this.fixedDate.month = date.getMonth();
    let months =["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.cont.firstChild.firstChild.nextSibling.innerHTML = months[date.getMonth()] + "  "+ date.getFullYear(); 
    this.drawAllDays(date);
  }
  nextMonth(date){
    let mon = date.getMonth();
      if(mon ===11){
        date.setMonth(0);
        date.setFullYear(date.getFullYear()+1);
      } else {
        date.setMonth(date.getMonth()+1);
      }
      this.rerender(date);
  }
  drawDays(){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let d = document.createElement("div");
    d.setAttribute("class", "days");
    this.cont.append(d);
    let daysss = "";
    for(let i=0; i<7; i++){
      daysss += `<div>${days[i]}</div>`;
    }
    d.innerHTML= daysss;
  }
  drawAllDays(date){
   let  days = this.calcDay(date);
   let prev_m = new Date(date.getFullYear(),date.getMonth()-1, 1);
   let prev_d = this.calcDay(prev_m);
   let mydate = date;
   mydate.setDate(1);
   let calendar = this.cont.lastChild;
   let dayss = "";
   let last_date  =  new Date(date.getFullYear(), date.getMonth(), days);
   let last = last_date.getDay();
   let n = date.getDay();
   prev_d = prev_d-n+1;
   if(n<6){
    for(let i = 0; i<mydate.getDay(); i++){
      dayss +=`<div class = "day x">${prev_d}</div>`;
      prev_d++;
    }
   }
   for(let day=1; day<=days; day++ ){
     dayss += `<div onclick = "${this.id}.render(new Date('${this.fixedDate.month+1}/${day}/${this.fixedDate.year}'))" class = "day ${this.fixedDate.day === day ? 'active' : ''}">${day}</div>`;
     calendar.innerHTML = dayss;
   }  
   if(last!=6){
    for(let day = 1; day<= 6-last; day++){
      dayss += `<div class = "day x"1>${day}</div>`
      calendar.innerHTML = dayss; 
    }
     }
  }
  prevMonth(date){
    let mon = date.getMonth();
    if(mon === 0){
      date.setMonth(11);
      date.setFullYear(date.getFullYear()-1);
    } else {
      date.setMonth(date.getMonth()-1);
    }
    this.render(date);
  }
  calcDay(date){
    let mon = date.getMonth() + 1;
    if(mon === 1 || mon === 3 || mon === 5 || mon === 7 || mon ===10 || mon === 8 || mon === 12 ){
      return 31;
    } else if(mon === 4 || mon === 6 || mon === 9 || mon === 11){
      return 30;
    } else {
      if((date.getFullYear() % 4 === 0 && date.getFullYear() %100 !==0) || (date.getFullYear() % 400 === 0)){
        return 29; 
      } else {
        return 28;
      }
    }
  }
}
