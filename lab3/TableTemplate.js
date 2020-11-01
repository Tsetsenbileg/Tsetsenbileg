class TableTemplate{
    constructor(){

    }
   static fillIn(id, dictionary, col){
        let tbl = document.getElementById(id);
        let td = tbl.getElementsByTagName("td");
        tbl.style.visibility = "visible";
        if(!col){
            for(let i=0; i<td.length; i++){
                let td_inner = td[i].innerHTML;
                td_inner = td_inner.slice(2,td_inner.length-2);
                td[i].innerHTML = dictionary[td_inner];
            }
        }else {
                let i = col ===  "Part Number" ? 0:1;
                let tr = tbl.rows;
                if(i){
                    for(let j = 1; j<tr.length; j++){
                        let td_inner = tr[j].cells[1].innerHTML;
                        td_inner = td_inner.slice(2,td_inner.length-2);
                        tr[j].cells[1].innerHTML = dictionary[td_inner];
                    }
                } else {
                    for( let j = 1; j<tr.length; j++){
                        let td_inner = tr[j].cells[0].innerHTML; 
                        td_inner = td_inner.slice(2,td_inner.length-2);
                        tr[j].cells[0].innerHTML = dictionary[td_inner];
                    }
                }
                for(let j = 0; j<tr[0].cells.length; j++){
                    let td_inner  = tr[0].cells[j].innerHTML; 
                    td_inner = td_inner.slice(2,td_inner.length-2);
                    tr[0].cells[j].innerHTML = dictionary[td_inner];
                }
            
        }
    }

}