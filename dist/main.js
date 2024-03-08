(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};let t;function n(){d.style.backgroundColor="low"===t?"lightblue":"normal"==t?"rgb(51, 126, 245)":"red"}function i(e){t=e.target.parentElement.getAttribute("data-priority"),!0===e.target.checked?(e.target.parentElement.style.backgroundColor="green",console.log("Div is checked"),e.target.parentElement.setAttribute("data-checked","true")):"low"===t?(e.target.parentElement.style.backgroundColor="lightblue",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false")):"normal"==t?(e.target.parentElement.style.backgroundColor="rgb(51, 126, 245)",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false")):(e.target.parentElement.style.backgroundColor="red",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false"))}e.d({},{q7:()=>s,r3:()=>o,$y:()=>m});const l=document.getElementById("content");let d;const o=document.getElementsByTagName("dialog")[0],a=document.getElementById("addItem"),r=document.getElementById("closeDialog"),c=document.getElementsByTagName("form")[0];a.addEventListener("click",(()=>{o.showModal(),c.reset()})),r.addEventListener("click",(()=>{o.close()}));class s{constructor(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i}}let m=[];document.getElementById("createTodoItem").addEventListener("click",(function(e){const a=document.getElementById("title").value,r=document.getElementById("description").value,c=document.getElementById("dueDate").value;if(t=document.getElementById("priority").value,a.length<1)alert("Please Insert a Title.");else if(r.length<1)alert("Please Insert a Description.");else if(""===c)alert("Please Choose Your Due Date.");else{const e=new s(a,r,c,t);console.log(e),m.push(e),console.log(m),function(){d=document.createElement("div");const e=document.createElement("input");e.type="checkbox",e.classList.add("checkbox");const o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");o.innerHTML="<h3>"+m[m.length-1].title+"</h3>",a.innerHTML="<p>"+m[m.length-1].description+"</p>",r.innerHTML="<p>"+m[m.length-1].dueDate+"</p>",n(),d.setAttribute("data-priority",t),d.setAttribute("data-index",m.length-1),d.setAttribute("data-checked","false"),d.setAttribute("data-editing","false"),d.appendChild(e),d.appendChild(o),d.appendChild(a),d.appendChild(r),d.classList.add("showItemDiv"),a.classList.add("showDescription"),l.appendChild(d),e.addEventListener("click",i),d.addEventListener("click",(e=>{e.target==d&&"false"==d.getAttribute("data-checked")&&"false"==d.getAttribute("data-editing")&&function(e){e.setAttribute("data-editing","true"),console.log("Div IS being edited right now");const i=document.createElement("input"),d=document.createElement("textarea"),o=document.createElement("input"),a=document.createElement("select"),r=document.createElement("option"),c=document.createElement("option"),s=document.createElement("option");r.innerText="Low",c.innerText="Normal",s.innerText="High",r.setAttribute("value","low"),c.setAttribute("value","normal"),s.setAttribute("value","high");const u=e.children,p=u.item(0),h=u.item(1).innerText,g=u.item(2).innerText,v=u.item(3).innerText,E=e.getAttribute("data-priority");p.disabled=!0,i.value=h,d.innerText=g,o.value=v,a.innerText=E,a.appendChild(r),a.appendChild(c),a.appendChild(s),"low"==E?r.selected=!0:"normal"==E?c.selected=!0:"high"==E&&(s.selected=!0),o.type="date",e.appendChild(i),e.appendChild(d),e.appendChild(o),e.appendChild(a),e.removeChild(u.item(1)),e.removeChild(u.item(1)),e.removeChild(u.item(1));const C=document.createElement("button"),b=document.createElement("button"),y=document.createElement("button");C.classList.add("editButton","saveEditButton"),b.classList.add("editButton","closeEditButton"),y.classList.add("editButton","deleteEditButton"),C.innerText="Save",b.innerText="Close",y.innerText="Delete",e.appendChild(y),e.appendChild(b),e.appendChild(C),y.addEventListener("click",(()=>{l.removeChild(e),e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")})),b.addEventListener("click",(()=>{const t=document.createElement("h3"),n=document.createElement("p"),l=document.createElement("p");e.setAttribute("data-priority",E),t.innerText=h,n.innerText=g,n.style.fontStyle="italic",l.innerText=v,e.appendChild(t),e.appendChild(n),e.appendChild(l),e.removeChild(i),e.removeChild(d),e.removeChild(o),e.removeChild(a),e.removeChild(C),e.removeChild(b),e.removeChild(y),p.disabled=!1,e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")})),C.addEventListener("click",(()=>{const l=document.createElement("h3"),r=document.createElement("p"),c=document.createElement("p");l.innerText=i.value,r.innerText=d.value,r.style.fontStyle="italic",c.innerText=o.value;const s=e.getAttribute("data-index");m[s].title=i.value,m[s].description=d.value,m[s].dueDate=o.value,m[s].priority=a.value,t=a.value,n(),e.setAttribute("data-priority",a.value),console.log(m[s]),console.log("Saved item's priority is: "+m[s].priority),e.appendChild(l),e.appendChild(r),e.appendChild(c),e.removeChild(i),e.removeChild(d),e.removeChild(o),e.removeChild(a),e.removeChild(C),e.removeChild(b),e.removeChild(y),p.disabled=!1,e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")}))}(e.target)}))}(),o.close()}e.preventDefault()}));const u=document.getElementById("newProject"),p=document.getElementById("projects");u.addEventListener("click",(()=>{const e=document.createElement("button"),t=document.createElement("input"),n=document.createElement("button"),i=document.createElement("button");n.innerText="+",i.innerText="-",e.style.padding="3px",n.style.backgroundColor="white",n.style.maxHeight="15px",n.style.maxWidth="15px",n.style.fontSize="1em",n.style.color="navy",i.style.backgroundColor="white",i.style.maxHeight="15px",i.style.maxWidth="15px",i.style.fontSize="1em",i.style.color="navy",e.appendChild(t),e.appendChild(i),e.appendChild(n),n.addEventListener("click",(()=>{e.innerText=t.value,e.removeChild(t),e.removeChild(i),e.removeChild(n)})),i.addEventListener("click",(()=>{p.removeChild(e)})),p.appendChild(e)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEIsVUFBWSxJQUN4QnlCLEVBQVl6QixVQUFZLElBRXhCc0IsRUFBUTFFLE1BQU04RSxRQUFVLE1BRXhCRixFQUFZNUUsTUFBTUMsZ0JBQWtCLFFBQ3BDMkUsRUFBWTVFLE1BQU0rRSxVQUFZLE9BQzlCSCxFQUFZNUUsTUFBTWdGLFNBQVcsT0FDN0JKLEVBQVk1RSxNQUFNaUYsU0FBVyxNQUM3QkwsRUFBWTVFLE1BQU1rRixNQUFRLE9BRTFCTCxFQUFZN0UsTUFBTUMsZ0JBQWtCLFFBQ3BDNEUsRUFBWTdFLE1BQU0rRSxVQUFZLE9BQzlCRixFQUFZN0UsTUFBTWdGLFNBQVcsT0FDN0JILEVBQVk3RSxNQUFNaUYsU0FBVyxNQUM3QkosRUFBWTdFLE1BQU1rRixNQUFRLE9BRTFCUixFQUFRL0IsWUFBWWdDLEdBQ3BCRCxFQUFRL0IsWUFBWWtDLEdBQ3BCSCxFQUFRL0IsWUFBWWlDLEdBRXBCQSxFQUFZMUQsaUJBQWlCLFNBQVMsS0FDbEN3RCxFQUFRdEIsVUFBWXVCLEVBQWlCOUMsTUFDckM2QyxFQUFRZCxZQUFZZSxHQUNwQkQsRUFBUWQsWUFBWWlCLEdBQ3BCSCxFQUFRZCxZQUFZZ0IsRUFBWSxJQUdwQ0MsRUFBWTNELGlCQUFpQixTQUFTLEtBQ2xDdUQsRUFBU2IsWUFBWWMsRUFBUSxJQUdqQ0QsRUFBUzlCLFlBQVkrQixFQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVG9kb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NldHRpbmdQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2hlY2tDaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2hvd2luZ0l0ZW1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFNob3dJdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiaW1wb3J0IHsgSXRlbSwgdG9kb0l0ZW1zLCBkaWFsb2cgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2hvd2luZ0l0ZW1zIH0gZnJvbSBcIi4vc2hvd2luZ0l0ZW1zLmpzXCI7XG5cbmV4cG9ydCBsZXQgcHJpb3JpdHk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbUZ1bmMgKGV2ZW50KSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICAgIHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcblxuICAgIGlmICh0aXRsZS5sZW5ndGggPCAxKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIEluc2VydCBhIFRpdGxlLlwiKVxuICAgIH1cblxuICAgIGVsc2UgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgSW5zZXJ0IGEgRGVzY3JpcHRpb24uXCIpXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoZHVlRGF0ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBDaG9vc2UgWW91ciBEdWUgRGF0ZS5cIilcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgdG9kb0l0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9JdGVtcyk7XG4gICAgICAgIHNob3dpbmdJdGVtcygpO1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG59IiwiaW1wb3J0IHsgcHJpb3JpdHkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvSXRlbS5qc1wiO1xuaW1wb3J0IHsgc2hvd0l0ZW0sIHNob3dpbmdJdGVtcyB9IGZyb20gXCIuL3Nob3dpbmdJdGVtcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dGluZ1ByaW9yaXR5ICgpIHtcbiAgICBpZiAocHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgICAgc2hvd0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJub3JtYWxcIikge1xuICAgICAgICBzaG93SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig1MSwgMTI2LCAyNDUpXCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICBzaG93SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBzZXR0aW5nUHJpb3JpdHkgfSBmcm9tIFwiLi9zZXR0aW5nUHJpb3JpdHlcIjtcbmltcG9ydCB7IHNob3dJdGVtIH0gZnJvbSBcIi4vc2hvd2luZ0l0ZW1zXCI7XG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gXCIuL2NyZWF0ZVRvZG9JdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NoZWNrYm94KGV2ZW50KSB7XG4gICAgcHJpb3JpdHkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaXYgaXMgY2hlY2tlZFwiKTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Ymx1ZVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXYgaXMgbm90IGNoZWNrZWRcIik7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJub3JtYWxcIikge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNTEsIDEyNiwgMjQ1KVwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXYgaXMgbm90IGNoZWNrZWRcIilcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBpcyBub3QgY2hlY2tlZFwiKVxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgY2hlY2tDaGVja2JveCB9IGZyb20gXCIuL2NoZWNrQ2hlY2tib3guanNcIjtcbmltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSBcIi4vY3JlYXRlVG9kb0l0ZW0uanNcIjtcbmltcG9ydCB7IGVkaXRTaG93SXRlbSB9IGZyb20gXCIuL2VkaXRTaG93SXRlbS5qc1wiO1xuaW1wb3J0IHsgdG9kb0l0ZW1zIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHNldHRpbmdQcmlvcml0eSB9IGZyb20gXCIuL3NldHRpbmdQcmlvcml0eS5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuZXhwb3J0IHsgY29udGVudCB9O1xuZXhwb3J0IGxldCBzaG93SXRlbTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dpbmdJdGVtcygpIHtcbiAgICBzaG93SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgY29uc3Qgc2hvd1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzaG93RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNob3dEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaG93VGl0bGUuaW5uZXJIVE1MID1cIjxoMz5cIiArIHRvZG9JdGVtc1sodG9kb0l0ZW1zLmxlbmd0aC0xKV0udGl0bGUgKyBcIjwvaDM+XCI7XG4gICAgc2hvd0Rlc2NyaXB0aW9uLmlubmVySFRNTCA9XCI8cD5cIiArIHRvZG9JdGVtc1sodG9kb0l0ZW1zLmxlbmd0aC0xKV0uZGVzY3JpcHRpb24gKyBcIjwvcD5cIjtcbiAgICBzaG93RHVlRGF0ZS5pbm5lckhUTUwgPVwiPHA+XCIgKyB0b2RvSXRlbXNbKHRvZG9JdGVtcy5sZW5ndGgtMSldLmR1ZURhdGUgKyBcIjwvcD5cIjtcblxuICAgIHNldHRpbmdQcmlvcml0eSgpO1xuXG4gICAgc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBwcmlvcml0eSk7XG4gICAgc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0b2RvSXRlbXMubGVuZ3RoLTEpO1xuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdGluZ1wiLCBcImZhbHNlXCIpO1xuXG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKHNob3dUaXRsZSk7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoc2hvd0Rlc2NyaXB0aW9uKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChzaG93RHVlRGF0ZSk7XG4gICAgc2hvd0l0ZW0uY2xhc3NMaXN0LmFkZChcInNob3dJdGVtRGl2XCIpO1xuICAgIHNob3dEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwic2hvd0Rlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzaG93SXRlbSk7XG5cbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2hlY2tib3gpO1xuXG4gICAgc2hvd0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBzaG93SXRlbSkge1xuICAgICAgICAgICAgaWYgKHNob3dJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiKSA9PSBcImZhbHNlXCIgJiYgc2hvd0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aW5nXCIpID09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgIGVkaXRTaG93SXRlbShlLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufSIsImltcG9ydCB7IHNob3dpbmdJdGVtcyB9IGZyb20gXCIuL3Nob3dpbmdJdGVtcy5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW1GdW5jIH0gZnJvbSAgXCIuL2NyZWF0ZVRvZG9JdGVtLmpzXCI7XG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGlhbG9nXCIpWzBdO1xuZXhwb3J0IHsgZGlhbG9nIH07XG5jb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRJdGVtXCIpO1xuY29uc3QgY2xvc2VEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRGlhbG9nXCIpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdO1xuXG5hZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGZvcm0ucmVzZXQoKTtcbn0pO1xuXG5jbG9zZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGRpYWxvZy5jbG9zZSgpO1xufSk7XG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfTtcbn1cblxuZXhwb3J0IGxldCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgY3JlYXRlVG9kb0l0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVRvZG9JdGVtXCIpO1xuXG5jcmVhdGVUb2RvSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG9JdGVtRnVuYyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RcIik7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHByb2plY3RTYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBwcm9qZWN0RXhpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgXG4gICAgcHJvamVjdFNhdmUuaW5uZXJUZXh0ID0gXCIrXCI7XG4gICAgcHJvamVjdEV4aXQuaW5uZXJUZXh0ID0gXCItXCI7XG5cbiAgICBwcm9qZWN0LnN0eWxlLnBhZGRpbmcgPSBcIjNweFwiO1xuXG4gICAgcHJvamVjdFNhdmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHByb2plY3RTYXZlLnN0eWxlLm1heEhlaWdodCA9IFwiMTVweFwiO1xuICAgIHByb2plY3RTYXZlLnN0eWxlLm1heFdpZHRoID0gXCIxNXB4XCI7XG4gICAgcHJvamVjdFNhdmUuc3R5bGUuZm9udFNpemUgPSBcIjFlbVwiO1xuICAgIHByb2plY3RTYXZlLnN0eWxlLmNvbG9yID0gXCJuYXZ5XCI7XG5cbiAgICBwcm9qZWN0RXhpdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgcHJvamVjdEV4aXQuc3R5bGUubWF4SGVpZ2h0ID0gXCIxNXB4XCI7XG4gICAgcHJvamVjdEV4aXQuc3R5bGUubWF4V2lkdGggPSBcIjE1cHhcIjtcbiAgICBwcm9qZWN0RXhpdC5zdHlsZS5mb250U2l6ZSA9IFwiMWVtXCI7XG4gICAgcHJvamVjdEV4aXQuc3R5bGUuY29sb3IgPSBcIm5hdnlcIjtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0RXhpdCk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0U2F2ZSk7XG5cbiAgICBwcm9qZWN0U2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0LmlubmVyVGV4dCA9IHByb2plY3ROYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIHByb2plY3QucmVtb3ZlQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgICAgIHByb2plY3QucmVtb3ZlQ2hpbGQocHJvamVjdEV4aXQpO1xuICAgICAgICBwcm9qZWN0LnJlbW92ZUNoaWxkKHByb2plY3RTYXZlKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RFeGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn0pOyIsImltcG9ydCB7IHRvZG9JdGVtcyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBzZXR0aW5nUHJpb3JpdHkgfSBmcm9tIFwiLi9zZXR0aW5nUHJpb3JpdHlcIjtcbmltcG9ydCB7IHNob3dJdGVtIH0gZnJvbSBcIi4vc2hvd2luZ0l0ZW1zXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vc2hvd2luZ0l0ZW1zXCI7XG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gXCIuL2NyZWF0ZVRvZG9JdGVtXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRTaG93SXRlbShzaG93SXRlbSkge1xuXG4gICAgc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aW5nXCIsIFwidHJ1ZVwiKTtcbiAgICBjb25zb2xlLmxvZyhcIkRpdiBJUyBiZWluZyBlZGl0ZWQgcmlnaHQgbm93XCIpO1xuXG4gICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY29uc3Qgb3B0aW9uTm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjb25zdCBvcHRpb25IaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIG9wdGlvbkxvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuICAgIG9wdGlvbk5vcm1hbC5pbm5lclRleHQgPSBcIk5vcm1hbFwiO1xuICAgIG9wdGlvbkhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG5cbiAgICBvcHRpb25Mb3cuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJsb3dcIik7IFxuICAgIG9wdGlvbk5vcm1hbC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5vcm1hbFwiKTtcbiAgICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcblxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBzaG93SXRlbS5jaGlsZHJlbjtcbiAgICBjb25zdCBjaGVja2JveCA9IGNoaWxkcmVuLml0ZW0oMCk7XG4gICAgY29uc3Qgb3JpZ2luYWxUaXRsZSA9IGNoaWxkcmVuLml0ZW0oMSkuaW5uZXJUZXh0O1xuICAgIGNvbnN0IG9yaWdpbmFsRGVzY3JpcHRpb24gPSBjaGlsZHJlbi5pdGVtKDIpLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbER1ZURhdGUgPSBjaGlsZHJlbi5pdGVtKDMpLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbFByaW9yaXR5ID0gc2hvd0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcblxuICAgIGNoZWNrYm94LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIGlucHV0VGl0bGUudmFsdWUgPSBvcmlnaW5hbFRpdGxlO1xuICAgIGlucHV0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gb3JpZ2luYWxEZXNjcmlwdGlvbjtcbiAgICBpbnB1dER1ZURhdGUudmFsdWUgPSBvcmlnaW5hbER1ZURhdGU7XG4gICAgaW5wdXRQcmlvcml0eS5pbm5lclRleHQgPSBvcmlnaW5hbFByaW9yaXR5O1xuXG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Mb3cpO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uTm9ybWFsKTtcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkhpZ2gpO1xuICAgIFxuICAgIGlmIChvcmlnaW5hbFByaW9yaXR5ID09IFwibG93XCIpIHtcbiAgICAgICAgb3B0aW9uTG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSBpZiAob3JpZ2luYWxQcmlvcml0eSA9PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgIG9wdGlvbk5vcm1hbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKG9yaWdpbmFsUHJpb3JpdHkgPT0gXCJoaWdoXCIpIHtcbiAgICAgICAgb3B0aW9uSGlnaC5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5wdXREdWVEYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgICBcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChpbnB1dFRpdGxlKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKGlucHV0UHJpb3JpdHkpO1xuXG5cbiAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChjaGlsZHJlbi5pdGVtKDEpKTtcbiAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChjaGlsZHJlbi5pdGVtKDEpKTtcbiAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChjaGlsZHJlbi5pdGVtKDEpKTtcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgc2F2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ1dHRvblwiLCBcInNhdmVFZGl0QnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIsIFwiY2xvc2VFZGl0QnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ1dHRvblwiLCBcImRlbGV0ZUVkaXRCdXR0b25cIik7XG5cbiAgICBzYXZlQnV0dG9uLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xuICAgIGNsb3NlQnV0dG9uLmlubmVyVGV4dCA9IFwiQ2xvc2VcIjtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcblxuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoc2hvd0l0ZW0pO1xuICAgICAgICBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpbmdcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaXYgSVMgTk9UIGJlaW5nIGVkaXRlZCByaWdodCBub3cuXCIpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIG9yaWdpbmFsUHJpb3JpdHkpO1xuXG4gICAgICAgIG5ld1RpdGxlLmlubmVyVGV4dCA9IG9yaWdpbmFsVGl0bGU7XG4gICAgICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IG9yaWdpbmFsRGVzY3JpcHRpb247XG4gICAgICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgICAgIG5ld0R1ZURhdGUuaW5uZXJUZXh0ID0gb3JpZ2luYWxEdWVEYXRlO1xuXG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdEdWVEYXRlKTtcblxuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dFRpdGxlKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0RHVlRGF0ZSk7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0UHJpb3JpdHkpO1xuXG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKHNhdmVCdXR0b24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpbmdcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEaXYgSVMgTk9UIGJlaW5nIGVkaXRlZCByaWdodCBub3cuXCIpO1xuICAgIH0pXG5cbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICAgICAgbmV3VGl0bGUuaW5uZXJUZXh0ID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcbiAgICAgICAgbmV3RHVlRGF0ZS5pbm5lclRleHQgPSBpbnB1dER1ZURhdGUudmFsdWU7XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBzaG93SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpO1xuICAgICAgICB0b2RvSXRlbXNbaW5kZXhdLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgICAgICAgdG9kb0l0ZW1zW2luZGV4XS5kZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRvZG9JdGVtc1tpbmRleF0uZHVlRGF0ZT0gaW5wdXREdWVEYXRlLnZhbHVlO1xuICAgICAgICB0b2RvSXRlbXNbaW5kZXhdLnByaW9yaXR5ID0gaW5wdXRQcmlvcml0eS52YWx1ZTtcblxuICAgICAgICBwcmlvcml0eSA9IGlucHV0UHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgc2V0dGluZ1ByaW9yaXR5KCk7XG5cbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIGlucHV0UHJpb3JpdHkudmFsdWUpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9JdGVtc1tpbmRleF0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmVkIGl0ZW0ncyBwcmlvcml0eSBpczogXCIgKyB0b2RvSXRlbXNbaW5kZXhdLnByaW9yaXR5KTtcblxuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSk7XG5cbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIGNoZWNrYm94LmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aW5nXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IElTIE5PVCBiZWluZyBlZGl0ZWQgcmlnaHQgbm93LlwiKTtcbiAgICB9KTtcblxufSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByaW9yaXR5Iiwic2V0dGluZ1ByaW9yaXR5Iiwic2hvd0l0ZW0iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNoZWNrQ2hlY2tib3giLCJldmVudCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJjaGVja2VkIiwiY29uc29sZSIsImxvZyIsInNldEF0dHJpYnV0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlhbG9nIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhZGRJdGVtIiwiY2xvc2VEaWFsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd01vZGFsIiwicmVzZXQiLCJjbG9zZSIsIkl0ZW0iLCJjb25zdHJ1Y3RvciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwidGhpcyIsInRvZG9JdGVtcyIsInZhbHVlIiwibGVuZ3RoIiwiYWxlcnQiLCJpdGVtIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJjaGVja2JveCIsInR5cGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzaG93VGl0bGUiLCJzaG93RGVzY3JpcHRpb24iLCJzaG93RHVlRGF0ZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZSIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRQcmlvcml0eSIsIm9wdGlvbkxvdyIsIm9wdGlvbk5vcm1hbCIsIm9wdGlvbkhpZ2giLCJpbm5lclRleHQiLCJjaGlsZHJlbiIsIm9yaWdpbmFsVGl0bGUiLCJvcmlnaW5hbERlc2NyaXB0aW9uIiwib3JpZ2luYWxEdWVEYXRlIiwib3JpZ2luYWxQcmlvcml0eSIsImRpc2FibGVkIiwic2VsZWN0ZWQiLCJyZW1vdmVDaGlsZCIsInNhdmVCdXR0b24iLCJjbG9zZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwiZm9udFN0eWxlIiwiaW5kZXgiLCJlZGl0U2hvd0l0ZW0iLCJzaG93aW5nSXRlbXMiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Byb2plY3RCdXR0b24iLCJwcm9qZWN0cyIsInByb2plY3QiLCJwcm9qZWN0TmFtZUlucHV0IiwicHJvamVjdFNhdmUiLCJwcm9qZWN0RXhpdCIsInBhZGRpbmciLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsImZvbnRTaXplIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9