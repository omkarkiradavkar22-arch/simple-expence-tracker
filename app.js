let amt=0;
             let list =[];
        const totalDisplay = document.querySelector(".total");
        const table = document.querySelector("table");
        const submit = document.querySelector(".submit");
        submit.addEventListener("click",()=>{
            const name = document.querySelector(".name").value;
            const amount = document.querySelector(".amount").value;
            console.log("button was clicked",name,amount);
            list.push({n:name,a:amount});
            amt+=Number(amount);
            totalDisplay.innerHTML = amt;
            console.log(list);
            const row = document.createElement("tr");
            
            row.innerHTML = `
            <td>${name}</td>
            <td>${amount}</td>
            <td><button class="delete">Delete</button></td>
            `;
            
            table.appendChild(row);
            const deletebtn= row.querySelector(".delete");
            deletebtn.addEventListener("click",()=>{
                console.log("delete btn clicked");
                amt-=Number(amount);
                totalDisplay.innerHTML = amt;
                row.remove();
            })
        });