(()=>{"use strict";var e={d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};let t,n;function l(){r.style.backgroundColor="low"===t?"lightblue":"normal"==t?"rgb(51, 126, 245)":"red"}function i(e){t=e.target.parentElement.getAttribute("data-priority"),!0===e.target.checked?e.target.parentElement.style.backgroundColor="green":"low"===t?(e.target.parentElement.style.backgroundColor="lightblue",console.log("Priority is LOW")):"normal"==t?(e.target.parentElement.style.backgroundColor="rgb(51, 126, 245)",console.log("Priority is NORMAL")):(e.target.parentElement.style.backgroundColor="red",console.log("Priority is HIGH"))}e.d({},{q7:()=>m,r3:()=>d,$y:()=>s});const o=document.getElementById("content");let r;const d=document.getElementsByTagName("dialog")[0],a=document.getElementById("addItem"),c=document.getElementById("closeDialog");a.addEventListener("click",(()=>{d.showModal()})),c.addEventListener("click",(()=>{d.close()}));class m{constructor(e,t,n,l){this.title=e,this.description=t,this.dueDate=n,this.priority=l}}let s=[];document.getElementById("createTodoItem").addEventListener("click",(function(e){const a=document.getElementById("title").value,c=document.getElementById("description").value,p=document.getElementById("dueDate").value;if(t=document.getElementById("priority").value,a.length<1)alert("Please Insert a Title.");else if(c.length<1)alert("Please Insert a Description.");else if(""===p)alert("Please Choose Your Due Date.");else{const e=new m(a,c,p,t);console.log(e),s.push(e),console.log(s),function(){r=document.createElement("div");const e=document.createElement("input");e.type="checkbox",e.classList.add("checkbox");const d=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");d.innerHTML="<h3>"+s[s.length-1].title+"</h3>",a.innerHTML="<p>"+s[s.length-1].description+"</p>",c.innerHTML="<p>"+s[s.length-1].dueDate+"</p>",l(),r.setAttribute("data-priority",t),r.setAttribute("data-index",s.length-1),r.appendChild(e),r.appendChild(d),r.appendChild(a),r.appendChild(c),r.classList.add("showItemDiv"),a.classList.add("showDescription"),o.appendChild(r),e.addEventListener("click",i),r.addEventListener("click",(e=>{e.target==r?function(e){const i=document.createElement("input"),r=document.createElement("textarea"),d=document.createElement("input"),a=document.createElement("select"),c=document.createElement("option"),m=document.createElement("option"),p=document.createElement("option");c.innerText="Low",m.innerText="Normal",p.innerText="High",c.setAttribute("value","low"),m.setAttribute("value","normal"),p.setAttribute("value","high");const u=e.children,h=u.item(1).firstChild.innerText,v=u.item(2).firstChild.innerText,g=u.item(3).firstChild.innerText,C=e.getAttribute("data-priority");i.value=h,r.innerText=v,d.value=g,a.innerText=C,a.appendChild(c),a.appendChild(m),a.appendChild(p),"low"==C?c.selected=!0:"normal"==C?m.selected=!0:p.selected=!0,d.type="date",e.appendChild(i),e.appendChild(r),e.appendChild(d),e.appendChild(a),e.removeChild(u.item(1)),e.removeChild(u.item(1)),e.removeChild(u.item(1));const E=document.createElement("button"),y=document.createElement("button"),b=document.createElement("button");E.innerText="Save",y.innerText="Close",b.innerText="Delete",e.appendChild(b),e.appendChild(y),e.appendChild(E),b.addEventListener("click",(()=>{o.removeChild(e)})),y.addEventListener("click",(()=>{const t=document.createElement("h3"),n=document.createElement("p"),l=document.createElement("p");e.setAttribute("data-priority",C),t.innerText=h,n.innerText=v,n.style.fontStyle="italic",l.innerText=g,e.appendChild(t),e.appendChild(n),e.appendChild(l),e.removeChild(i),e.removeChild(r),e.removeChild(d),e.removeChild(a),e.removeChild(E),e.removeChild(y),e.removeChild(b)})),E.addEventListener("click",(()=>{const o=document.createElement("h3"),c=document.createElement("p"),m=document.createElement("p");n=e.setAttribute("data-priority",a),o.innerText=i.value,c.innerText=r.value,c.style.fontStyle="italic",m.innerText=d.value;const p=e.getAttribute("data-index");s[p].title=i.value,s[p].description=r.value,s[p].dueDate=d.value,s[p].priority=a.value,t=a.value,l(),console.log(s[p]),console.log("Saved item's priority is: "+s[p].priority),e.appendChild(o),e.appendChild(c),e.appendChild(m),e.removeChild(i),e.removeChild(r),e.removeChild(d),e.removeChild(a),e.removeChild(E),e.removeChild(y),e.removeChild(b)}))}(e.target):console.log("Error! Clicked element can't be processed")}),{once:!0})}()}e.preventDefault(),d.close()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELENBQUM0RCxNQUFPLEdBQ2YsQ0puQlFDLEVBQ0osQ0FFQW5FLEVBQU1vRSxpQkFDTjFELEVBQU9NLE9BQ1gsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFNob3dJdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR0aW5nUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nob3dpbmdJdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgeyBJdGVtLCB0b2RvSXRlbXMsIGRpYWxvZyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBzaG93aW5nSXRlbXMgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXMuanNcIjtcblxuZXhwb3J0IGxldCBwcmlvcml0eTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtRnVuYyAoZXZlbnQpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuXG4gICAgaWYgKHRpdGxlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgSW5zZXJ0IGEgVGl0bGUuXCIpXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoIDwgMSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBJbnNlcnQgYSBEZXNjcmlwdGlvbi5cIilcbiAgICB9XG5cbiAgICBlbHNlIGlmIChkdWVEYXRlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIENob29zZSBZb3VyIER1ZSBEYXRlLlwiKVxuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBpdGVtID0gbmV3IEl0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICB0b2RvSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0l0ZW1zKTtcbiAgICAgICAgc2hvd2luZ0l0ZW1zKCk7XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn0iLCJpbXBvcnQgeyB0b2RvSXRlbXMgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgc2V0dGluZ1ByaW9yaXR5IH0gZnJvbSBcIi4vc2V0dGluZ1ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzaG93SXRlbSB9IGZyb20gXCIuL3Nob3dpbmdJdGVtc1wiO1xuaW1wb3J0IHsgY29udGVudCB9IGZyb20gXCIuL3Nob3dpbmdJdGVtc1wiO1xuaW1wb3J0IHsgcHJpb3JpdHkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvSXRlbVwiO1xuXG5leHBvcnQgbGV0IG5ld1ByaW9yaXR5O1xuZXhwb3J0IGxldCBpbnB1dFByaW9yaXR5O1xuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFNob3dJdGVtKHNob3dJdGVtKSB7XG4gICAgLy8gZm9yIChjb25zdCBjaGlsZCBvZiBzaG93SXRlbS5jaGlsZHJlbikge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhjaGlsZCk7XG4gICAgLy8gICB9XG5cbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjb25zdCBvcHRpb25Ob3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgb3B0aW9uTG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG4gICAgb3B0aW9uTm9ybWFsLmlubmVyVGV4dCA9IFwiTm9ybWFsXCI7XG4gICAgb3B0aW9uSGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTsgXG4gICAgb3B0aW9uTm9ybWFsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9ybWFsXCIpO1xuICAgIG9wdGlvbkhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBzaG93SXRlbS5jaGlsZHJlbjtcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlID0gY2hpbGRyZW4uaXRlbSgxKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbERlc2NyaXB0aW9uID0gY2hpbGRyZW4uaXRlbSgyKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbER1ZURhdGUgPSBjaGlsZHJlbi5pdGVtKDMpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGNvbnN0IG9yaWdpbmFsUHJpb3JpdHkgPSBzaG93SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xuXG4gICAgaW5wdXRUaXRsZS52YWx1ZSA9IG9yaWdpbmFsVGl0bGU7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBvcmlnaW5hbERlc2NyaXB0aW9uO1xuICAgIGlucHV0RHVlRGF0ZS52YWx1ZSA9IG9yaWdpbmFsRHVlRGF0ZTtcbiAgICBpbnB1dFByaW9yaXR5LmlubmVyVGV4dCA9IG9yaWdpbmFsUHJpb3JpdHk7XG5cbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Ob3JtYWwpO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG4gICAgXG4gICAgaWYgKG9yaWdpbmFsUHJpb3JpdHkgPT0gXCJsb3dcIikge1xuICAgICAgICBvcHRpb25Mb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmIChvcmlnaW5hbFByaW9yaXR5ID09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgb3B0aW9uTm9ybWFsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbkhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlucHV0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgXG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuXG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHNhdmVCdXR0b24uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJDbG9zZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuXG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoc2F2ZUJ1dHRvbik7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChzaG93SXRlbSk7XG4gICAgfSk7XG5cbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgb3JpZ2luYWxQcmlvcml0eSk7XG5cbiAgICAgICAgbmV3VGl0bGUuaW5uZXJUZXh0ID0gb3JpZ2luYWxUaXRsZTtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gb3JpZ2luYWxEZXNjcmlwdGlvbjtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgbmV3RHVlRGF0ZS5pbm5lclRleHQgPSBvcmlnaW5hbER1ZURhdGU7XG5cbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpO1xuXG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXRQcmlvcml0eSk7XG5cbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9KVxuXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBuZXdQcmlvcml0eSA9IHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgaW5wdXRQcmlvcml0eSk7XG5cbiAgICAgICAgbmV3VGl0bGUuaW5uZXJUZXh0ID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgbmV3RHVlRGF0ZS5pbm5lclRleHQgPSBpbnB1dER1ZURhdGUudmFsdWU7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBzaG93SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgICB0b2RvSXRlbXNbaW5kZXhdLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgdG9kb0l0ZW1zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRvZG9JdGVtc1tpbmRleF0uZHVlRGF0ZT0gaW5wdXREdWVEYXRlLnZhbHVlO1xuICAgICAgICB0b2RvSXRlbXNbaW5kZXhdLnByaW9yaXR5ID0gaW5wdXRQcmlvcml0eS52YWx1ZTtcblxuICAgICAgICBwcmlvcml0eSA9IGlucHV0UHJpb3JpdHkudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBzZXR0aW5nUHJpb3JpdHkoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0b2RvSXRlbXNbaW5kZXhdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTYXZlZCBpdGVtJ3MgcHJpb3JpdHkgaXM6IFwiICsgdG9kb0l0ZW1zW2luZGV4XS5wcmlvcml0eSk7XG5cbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld0R1ZURhdGUpO1xuXG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0VGl0bGUpO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXRQcmlvcml0eSk7XG5cbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoc2F2ZUJ1dHRvbik7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICB9KTtcblxufSIsImltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSBcIi4vY3JlYXRlVG9kb0l0ZW0uanNcIjtcbmltcG9ydCB7IHNob3dJdGVtLCBzaG93aW5nSXRlbXMgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmdQcmlvcml0eSAoKSB7XG4gICAgaWYgKHByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgIHNob3dJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgc2hvd0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNTEsIDEyNiwgMjQ1KVwiO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIHtcbiAgICAgICAgc2hvd0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0dGluZ1ByaW9yaXR5IH0gZnJvbSBcIi4vc2V0dGluZ1ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzaG93SXRlbSB9IGZyb20gXCIuL3Nob3dpbmdJdGVtc1wiO1xuaW1wb3J0IHsgcHJpb3JpdHkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvSXRlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDaGVja2JveChldmVudCkge1xuICAgIHByaW9yaXR5ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByaW9yaXR5IGlzIExPV1wiKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIGlmIChwcmlvcml0eSA9PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig1MSwgMTI2LCAyNDUpXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByaW9yaXR5IGlzIE5PUk1BTFwiKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByaW9yaXR5IGlzIEhJR0hcIilcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNoZWNrQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja0NoZWNrYm94LmpzXCI7XG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gXCIuL2NyZWF0ZVRvZG9JdGVtLmpzXCI7XG5pbXBvcnQgeyBlZGl0U2hvd0l0ZW0gfSBmcm9tIFwiLi9lZGl0U2hvd0l0ZW0uanNcIjtcbmltcG9ydCB7IHRvZG9JdGVtcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBzZXR0aW5nUHJpb3JpdHkgfSBmcm9tIFwiLi9zZXR0aW5nUHJpb3JpdHkuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmV4cG9ydCB7IGNvbnRlbnQgfTtcbmV4cG9ydCBsZXQgc2hvd0l0ZW07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93aW5nSXRlbXMoKSB7XG4gICAgc2hvd0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzaG93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hvd1RpdGxlLmlubmVySFRNTCA9XCI8aDM+XCIgKyB0b2RvSXRlbXNbKHRvZG9JdGVtcy5sZW5ndGgtMSldLnRpdGxlICsgXCI8L2gzPlwiO1xuICAgIHNob3dEZXNjcmlwdGlvbi5pbm5lckhUTUwgPVwiPHA+XCIgKyB0b2RvSXRlbXNbKHRvZG9JdGVtcy5sZW5ndGgtMSldLmRlc2NyaXB0aW9uICsgXCI8L3A+XCI7XG4gICAgc2hvd0R1ZURhdGUuaW5uZXJIVE1MID1cIjxwPlwiICsgdG9kb0l0ZW1zWyh0b2RvSXRlbXMubGVuZ3RoLTEpXS5kdWVEYXRlICsgXCI8L3A+XCI7XG5cbiAgICBzZXR0aW5nUHJpb3JpdHkoKTtcblxuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdG9kb0l0ZW1zLmxlbmd0aC0xKTtcblxuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChzaG93VGl0bGUpO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKHNob3dEZXNjcmlwdGlvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoc2hvd0R1ZURhdGUpO1xuICAgIHNob3dJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbURpdlwiKTtcbiAgICBzaG93RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInNob3dEZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hvd0l0ZW0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NoZWNrYm94KTtcbiAgICBzaG93SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBzaG93SXRlbSkge1xuICAgICAgICAgICAgZWRpdFNob3dJdGVtKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yISBDbGlja2VkIGVsZW1lbnQgY2FuJ3QgYmUgcHJvY2Vzc2VkXCIpO1xuICAgICAgICB9XG5cbiAgICB9LCB7b25jZSA6IHRydWV9KTtcbn0iLCJpbXBvcnQgeyBzaG93aW5nSXRlbXMgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtRnVuYyB9IGZyb20gIFwiLi9jcmVhdGVUb2RvSXRlbS5qc1wiO1xuXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpYWxvZ1wiKVswXTtcbmV4cG9ydCB7IGRpYWxvZyB9O1xuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbVwiKTtcbmNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZURpYWxvZ1wiKTtcblxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbn0pO1xuXG5jbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGxldCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgY3JlYXRlVG9kb0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRvZG9JdGVtXCIpO1xuXG5jcmVhdGVUb2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG9JdGVtRnVuYyk7XG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcmlvcml0eSIsIm5ld1ByaW9yaXR5Iiwic2V0dGluZ1ByaW9yaXR5Iiwic2hvd0l0ZW0iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNoZWNrQ2hlY2tib3giLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlhbG9nIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhZGRJdGVtIiwiY2xvc2VEaWFsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd01vZGFsIiwiY2xvc2UiLCJJdGVtIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInRoaXMiLCJ0b2RvSXRlbXMiLCJ2YWx1ZSIsImxlbmd0aCIsImFsZXJ0IiwiaXRlbSIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tib3giLCJ0eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvd1RpdGxlIiwic2hvd0Rlc2NyaXB0aW9uIiwic2hvd0R1ZURhdGUiLCJpbm5lckhUTUwiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImUiLCJpbnB1dFRpdGxlIiwiaW5wdXREZXNjcmlwdGlvbiIsImlucHV0RHVlRGF0ZSIsImlucHV0UHJpb3JpdHkiLCJvcHRpb25Mb3ciLCJvcHRpb25Ob3JtYWwiLCJvcHRpb25IaWdoIiwiaW5uZXJUZXh0IiwiY2hpbGRyZW4iLCJvcmlnaW5hbFRpdGxlIiwiZmlyc3RDaGlsZCIsIm9yaWdpbmFsRGVzY3JpcHRpb24iLCJvcmlnaW5hbER1ZURhdGUiLCJvcmlnaW5hbFByaW9yaXR5Iiwic2VsZWN0ZWQiLCJyZW1vdmVDaGlsZCIsInNhdmVCdXR0b24iLCJjbG9zZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwiZm9udFN0eWxlIiwiaW5kZXgiLCJlZGl0U2hvd0l0ZW0iLCJvbmNlIiwic2hvd2luZ0l0ZW1zIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9