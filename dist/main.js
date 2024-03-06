(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};let t;function n(){d.style.backgroundColor="low"===t?"lightblue":"normal"==t?"rgb(51, 126, 245)":"red"}function i(e){t=e.target.parentElement.getAttribute("data-priority"),!0===e.target.checked?(e.target.parentElement.style.backgroundColor="green",console.log("Div is checked"),e.target.parentElement.setAttribute("data-checked","true")):"low"===t?(e.target.parentElement.style.backgroundColor="lightblue",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false")):"normal"==t?(e.target.parentElement.style.backgroundColor="rgb(51, 126, 245)",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false")):(e.target.parentElement.style.backgroundColor="red",console.log("Div is not checked"),e.target.parentElement.setAttribute("data-checked","false"))}e.d({},{q7:()=>s,r3:()=>o,$y:()=>m});const l=document.getElementById("content");let d;const o=document.getElementsByTagName("dialog")[0],a=document.getElementById("addItem"),r=document.getElementById("closeDialog"),c=document.getElementsByTagName("form")[0];a.addEventListener("click",(()=>{o.showModal(),c.reset()})),r.addEventListener("click",(()=>{o.close()}));class s{constructor(e,t,n,i){this.title=e,this.description=t,this.dueDate=n,this.priority=i}}let m=[];document.getElementById("createTodoItem").addEventListener("click",(function(e){const a=document.getElementById("title").value,r=document.getElementById("description").value,c=document.getElementById("dueDate").value;if(t=document.getElementById("priority").value,a.length<1)alert("Please Insert a Title.");else if(r.length<1)alert("Please Insert a Description.");else if(""===c)alert("Please Choose Your Due Date.");else{const e=new s(a,r,c,t);console.log(e),m.push(e),console.log(m),function(){d=document.createElement("div");const e=document.createElement("input");e.type="checkbox",e.classList.add("checkbox");const o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");o.innerHTML="<h3>"+m[m.length-1].title+"</h3>",a.innerHTML="<p>"+m[m.length-1].description+"</p>",r.innerHTML="<p>"+m[m.length-1].dueDate+"</p>",n(),d.setAttribute("data-priority",t),d.setAttribute("data-index",m.length-1),d.setAttribute("data-checked","false"),d.setAttribute("data-editing","false"),d.appendChild(e),d.appendChild(o),d.appendChild(a),d.appendChild(r),d.classList.add("showItemDiv"),a.classList.add("showDescription"),l.appendChild(d),e.addEventListener("click",i),d.addEventListener("click",(e=>{e.target==d&&"false"==d.getAttribute("data-checked")&&"false"==d.getAttribute("data-editing")&&function(e){e.setAttribute("data-editing","true"),console.log("Div IS being edited right now");const i=document.createElement("input"),d=document.createElement("textarea"),o=document.createElement("input"),a=document.createElement("select"),r=document.createElement("option"),c=document.createElement("option"),s=document.createElement("option");r.innerText="Low",c.innerText="Normal",s.innerText="High",r.setAttribute("value","low"),c.setAttribute("value","normal"),s.setAttribute("value","high");const u=e.children,p=u.item(1).firstChild.innerText,h=u.item(2).firstChild.innerText,g=u.item(3).firstChild.innerText,v=e.getAttribute("data-priority");i.value=p,d.innerText=h,o.value=g,a.innerText=v,a.appendChild(r),a.appendChild(c),a.appendChild(s),"low"==v?r.selected=!0:"normal"==v?c.selected=!0:s.selected=!0,o.type="date",e.appendChild(i),e.appendChild(d),e.appendChild(o),e.appendChild(a),e.removeChild(u.item(1)),e.removeChild(u.item(1)),e.removeChild(u.item(1));const E=document.createElement("button"),C=document.createElement("button"),b=document.createElement("button");E.classList.add("editButton","saveEditButton"),C.classList.add("editButton","closeEditButton"),b.classList.add("editButton","deleteEditButton"),E.innerText="Save",C.innerText="Close",b.innerText="Delete",e.appendChild(b),e.appendChild(C),e.appendChild(E),b.addEventListener("click",(()=>{l.removeChild(e),e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")})),C.addEventListener("click",(()=>{const t=document.createElement("h3"),n=document.createElement("p"),l=document.createElement("p");e.setAttribute("data-priority",v),t.innerText=p,n.innerText=h,n.style.fontStyle="italic",l.innerText=g,e.appendChild(t),e.appendChild(n),e.appendChild(l),e.removeChild(i),e.removeChild(d),e.removeChild(o),e.removeChild(a),e.removeChild(E),e.removeChild(C),e.removeChild(b),e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")})),E.addEventListener("click",(()=>{const l=document.createElement("h3"),r=document.createElement("p"),c=document.createElement("p");e.setAttribute("data-priority",a),l.innerText=i.value,r.innerText=d.value,r.style.fontStyle="italic",c.innerText=o.value;const s=e.getAttribute("data-index");m[s].title=i.value,m[s].description=d.value,m[s].dueDate=o.value,m[s].priority=a.value,t=a.value,n(),console.log(m[s]),console.log("Saved item's priority is: "+m[s].priority),e.appendChild(l),e.appendChild(r),e.appendChild(c),e.removeChild(i),e.removeChild(d),e.removeChild(o),e.removeChild(a),e.removeChild(E),e.removeChild(C),e.removeChild(b),e.setAttribute("data-editing","false"),console.log("Div IS NOT being edited right now.")}))}(e.target)}))}(),o.close()}e.preventDefault()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckUsRUFBU08sYUFBYSxjQUNwQ3NCLEVBQVV3QyxHQUFPNUMsTUFBUXFCLEVBQVdoQixNQUNwQ0QsRUFBVXdDLEdBQU8zQyxZQUFjcUIsRUFBaUJqQixNQUNoREQsRUFBVXdDLEdBQU8xQyxRQUFTcUIsRUFBYWxCLE1BQ3ZDRCxFQUFVd0MsR0FBT3ZFLFNBQVdtRCxFQUFjbkIsTUFFMUNoQyxFQUFXbUQsRUFBY25CLE1BRXpCL0IsSUFFQVUsUUFBUUMsSUFBSW1CLEVBQVV3QyxJQUN0QjVELFFBQVFDLElBQUksNkJBQStCbUIsRUFBVXdDLEdBQU92RSxVQUU1REUsRUFBUzRDLFlBQVlxQixHQUNyQmpFLEVBQVM0QyxZQUFZc0IsR0FDckJsRSxFQUFTNEMsWUFBWXVCLEdBRXJCbkUsRUFBUzZELFlBQVlmLEdBQ3JCOUMsRUFBUzZELFlBQVlkLEdBQ3JCL0MsRUFBUzZELFlBQVliLEdBQ3JCaEQsRUFBUzZELFlBQVlaLEdBRXJCakQsRUFBUzZELFlBQVlDLEdBQ3JCOUQsRUFBUzZELFlBQVlFLEdBQ3JCL0QsRUFBUzZELFlBQVlHLEdBRXJCaEUsRUFBU1csYUFBYSxlQUFnQixTQUN0Q0YsUUFBUUMsSUFBSSxxQ0FBcUMsR0FHekQsQ0ZwSGdCNEQsQ0FBYXpCLEVBQUV4QyxPQUV2QixHQUdSLENIcEJRa0UsR0FDQXhELEVBQU9PLE9BQ1gsQ0FFQWxCLEVBQU1vRSxnQkFFVixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG9JdGVtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zZXR0aW5nUHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrQ2hlY2tib3guanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Nob3dpbmdJdGVtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2VkaXRTaG93SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IEl0ZW0sIHRvZG9JdGVtcywgZGlhbG9nIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHNob3dpbmdJdGVtcyB9IGZyb20gXCIuL3Nob3dpbmdJdGVtcy5qc1wiO1xuXG5leHBvcnQgbGV0IHByaW9yaXR5O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1GdW5jIChldmVudCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICBpZiAodGl0bGUubGVuZ3RoIDwgMSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSBJbnNlcnQgYSBUaXRsZS5cIilcbiAgICB9XG5cbiAgICBlbHNlIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPCAxKSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIEluc2VydCBhIERlc2NyaXB0aW9uLlwiKVxuICAgIH1cblxuICAgIGVsc2UgaWYgKGR1ZURhdGUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgQ2hvb3NlIFlvdXIgRHVlIERhdGUuXCIpXG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBuZXcgSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIHRvZG9JdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvSXRlbXMpO1xuICAgICAgICBzaG93aW5nSXRlbXMoKTtcbiAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxufSIsImltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSBcIi4vY3JlYXRlVG9kb0l0ZW0uanNcIjtcbmltcG9ydCB7IHNob3dJdGVtLCBzaG93aW5nSXRlbXMgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXMuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRpbmdQcmlvcml0eSAoKSB7XG4gICAgaWYgKHByaW9yaXR5ID09PSBcImxvd1wiKSB7XG4gICAgICAgIHNob3dJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRibHVlXCI7XG4gICAgfVxuICAgIFxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgc2hvd0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoNTEsIDEyNiwgMjQ1KVwiO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIHtcbiAgICAgICAgc2hvd0l0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG59IiwiaW1wb3J0IHsgc2V0dGluZ1ByaW9yaXR5IH0gZnJvbSBcIi4vc2V0dGluZ1ByaW9yaXR5XCI7XG5pbXBvcnQgeyBzaG93SXRlbSB9IGZyb20gXCIuL3Nob3dpbmdJdGVtc1wiO1xuaW1wb3J0IHsgcHJpb3JpdHkgfSBmcm9tIFwiLi9jcmVhdGVUb2RvSXRlbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tDaGVja2JveChldmVudCkge1xuICAgIHByaW9yaXR5ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiKTtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IGlzIGNoZWNrZWRcIik7XG4gICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcInRydWVcIik7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGJsdWVcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IGlzIG5vdCBjaGVja2VkXCIpO1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDUxLCAxMjYsIDI0NSlcIjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IGlzIG5vdCBjaGVja2VkXCIpXG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXYgaXMgbm90IGNoZWNrZWRcIilcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImZhbHNlXCIpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGNoZWNrQ2hlY2tib3ggfSBmcm9tIFwiLi9jaGVja0NoZWNrYm94LmpzXCI7XG5pbXBvcnQgeyBwcmlvcml0eSB9IGZyb20gXCIuL2NyZWF0ZVRvZG9JdGVtLmpzXCI7XG5pbXBvcnQgeyBlZGl0U2hvd0l0ZW0gfSBmcm9tIFwiLi9lZGl0U2hvd0l0ZW0uanNcIjtcbmltcG9ydCB7IHRvZG9JdGVtcyB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBzZXR0aW5nUHJpb3JpdHkgfSBmcm9tIFwiLi9zZXR0aW5nUHJpb3JpdHkuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmV4cG9ydCB7IGNvbnRlbnQgfTtcbmV4cG9ydCBsZXQgc2hvd0l0ZW07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93aW5nSXRlbXMoKSB7XG4gICAgc2hvd0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc2hvd0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzaG93RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hvd1RpdGxlLmlubmVySFRNTCA9XCI8aDM+XCIgKyB0b2RvSXRlbXNbKHRvZG9JdGVtcy5sZW5ndGgtMSldLnRpdGxlICsgXCI8L2gzPlwiO1xuICAgIHNob3dEZXNjcmlwdGlvbi5pbm5lckhUTUwgPVwiPHA+XCIgKyB0b2RvSXRlbXNbKHRvZG9JdGVtcy5sZW5ndGgtMSldLmRlc2NyaXB0aW9uICsgXCI8L3A+XCI7XG4gICAgc2hvd0R1ZURhdGUuaW5uZXJIVE1MID1cIjxwPlwiICsgdG9kb0l0ZW1zWyh0b2RvSXRlbXMubGVuZ3RoLTEpXS5kdWVEYXRlICsgXCI8L3A+XCI7XG5cbiAgICBzZXR0aW5nUHJpb3JpdHkoKTtcblxuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtcHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgdG9kb0l0ZW1zLmxlbmd0aC0xKTtcbiAgICBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIiwgXCJmYWxzZVwiKTtcbiAgICBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpbmdcIiwgXCJmYWxzZVwiKTtcblxuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChzaG93VGl0bGUpO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKHNob3dEZXNjcmlwdGlvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoc2hvd0R1ZURhdGUpO1xuICAgIHNob3dJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93SXRlbURpdlwiKTtcbiAgICBzaG93RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInNob3dEZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hvd0l0ZW0pO1xuXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NoZWNrYm94KTtcblxuICAgIHNob3dJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT0gc2hvd0l0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzaG93SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIikgPT0gXCJmYWxzZVwiICYmIHNob3dJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZWRpdGluZ1wiKSA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICBlZGl0U2hvd0l0ZW0oZS50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbn0iLCJpbXBvcnQgeyBzaG93aW5nSXRlbXMgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXMuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtRnVuYyB9IGZyb20gIFwiLi9jcmVhdGVUb2RvSXRlbS5qc1wiO1xuXG5jb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpYWxvZ1wiKVswXTtcbmV4cG9ydCB7IGRpYWxvZyB9O1xuY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkSXRlbVwiKTtcbmNvbnN0IGNsb3NlRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZURpYWxvZ1wiKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXTtcblxuYWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGRpYWxvZy5zaG93TW9kYWwoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG59KTtcblxuY2xvc2VEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5leHBvcnQgY2xhc3MgSXRlbSB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH07XG59XG5cbmV4cG9ydCBsZXQgdG9kb0l0ZW1zID0gW107XG5cbmNvbnN0IGNyZWF0ZVRvZG9JdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVUb2RvSXRlbVwiKTtcblxuY3JlYXRlVG9kb0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUb2RvSXRlbUZ1bmMpO1xuIiwiaW1wb3J0IHsgdG9kb0l0ZW1zIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHNldHRpbmdQcmlvcml0eSB9IGZyb20gXCIuL3NldHRpbmdQcmlvcml0eVwiO1xuaW1wb3J0IHsgc2hvd0l0ZW0gfSBmcm9tIFwiLi9zaG93aW5nSXRlbXNcIjtcbmltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9zaG93aW5nSXRlbXNcIjtcbmltcG9ydCB7IHByaW9yaXR5IH0gZnJvbSBcIi4vY3JlYXRlVG9kb0l0ZW1cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFNob3dJdGVtKHNob3dJdGVtKSB7XG5cbiAgICBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRpbmdcIiwgXCJ0cnVlXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiRGl2IElTIGJlaW5nIGVkaXRlZCByaWdodCBub3dcIik7XG5cbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjb25zdCBvcHRpb25Ob3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgb3B0aW9uTG93LmlubmVyVGV4dCA9IFwiTG93XCI7XG4gICAgb3B0aW9uTm9ybWFsLmlubmVyVGV4dCA9IFwiTm9ybWFsXCI7XG4gICAgb3B0aW9uSGlnaC5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTsgXG4gICAgb3B0aW9uTm9ybWFsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibm9ybWFsXCIpO1xuICAgIG9wdGlvbkhpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBzaG93SXRlbS5jaGlsZHJlbjtcbiAgICBjb25zdCBvcmlnaW5hbFRpdGxlID0gY2hpbGRyZW4uaXRlbSgxKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbERlc2NyaXB0aW9uID0gY2hpbGRyZW4uaXRlbSgyKS5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBjb25zdCBvcmlnaW5hbER1ZURhdGUgPSBjaGlsZHJlbi5pdGVtKDMpLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGNvbnN0IG9yaWdpbmFsUHJpb3JpdHkgPSBzaG93SXRlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIpO1xuXG4gICAgaW5wdXRUaXRsZS52YWx1ZSA9IG9yaWdpbmFsVGl0bGU7XG4gICAgaW5wdXREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBvcmlnaW5hbERlc2NyaXB0aW9uO1xuICAgIGlucHV0RHVlRGF0ZS52YWx1ZSA9IG9yaWdpbmFsRHVlRGF0ZTtcbiAgICBpbnB1dFByaW9yaXR5LmlubmVyVGV4dCA9IG9yaWdpbmFsUHJpb3JpdHk7XG5cbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbkxvdyk7XG4gICAgaW5wdXRQcmlvcml0eS5hcHBlbmRDaGlsZChvcHRpb25Ob3JtYWwpO1xuICAgIGlucHV0UHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uSGlnaCk7XG4gICAgXG4gICAgaWYgKG9yaWdpbmFsUHJpb3JpdHkgPT0gXCJsb3dcIikge1xuICAgICAgICBvcHRpb25Mb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmIChvcmlnaW5hbFByaW9yaXR5ID09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgb3B0aW9uTm9ybWFsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZWxzZSB7XG4gICAgICAgIG9wdGlvbkhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlucHV0RHVlRGF0ZS50eXBlID0gXCJkYXRlXCI7XG4gICAgXG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREZXNjcmlwdGlvbik7XG4gICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQoaW5wdXREdWVEYXRlKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuXG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG4gICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2hpbGRyZW4uaXRlbSgxKSk7XG5cbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHNhdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRCdXR0b25cIiwgXCJzYXZlRWRpdEJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ1dHRvblwiLCBcImNsb3NlRWRpdEJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRCdXR0b25cIiwgXCJkZWxldGVFZGl0QnV0dG9uXCIpO1xuXG4gICAgc2F2ZUJ1dHRvbi5pbm5lclRleHQgPSBcIlNhdmVcIjtcbiAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSBcIkNsb3NlXCI7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG5cbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHNob3dJdGVtKTtcbiAgICAgICAgc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1lZGl0aW5nXCIsIFwiZmFsc2VcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGl2IElTIE5PVCBiZWluZyBlZGl0ZWQgcmlnaHQgbm93LlwiKTtcbiAgICB9KTtcblxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBuZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gc2hvd0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1wcmlvcml0eVwiLCBvcmlnaW5hbFByaW9yaXR5KTtcblxuICAgICAgICBuZXdUaXRsZS5pbm5lclRleHQgPSBvcmlnaW5hbFRpdGxlO1xuICAgICAgICBuZXdEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBvcmlnaW5hbERlc2NyaXB0aW9uO1xuICAgICAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xuICAgICAgICBuZXdEdWVEYXRlLmlubmVyVGV4dCA9IG9yaWdpbmFsRHVlRGF0ZTtcblxuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSk7XG5cbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdGluZ1wiLCBcImZhbHNlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBJUyBOT1QgYmVpbmcgZWRpdGVkIHJpZ2h0IG5vdy5cIik7XG4gICAgfSlcblxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBzaG93SXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaW9yaXR5XCIsIGlucHV0UHJpb3JpdHkpO1xuXG4gICAgICAgIG5ld1RpdGxlLmlubmVyVGV4dCA9IGlucHV0VGl0bGUudmFsdWU7XG4gICAgICAgIG5ld0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XG4gICAgICAgIG5ld0R1ZURhdGUuaW5uZXJUZXh0ID0gaW5wdXREdWVEYXRlLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gc2hvd0l0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgICAgdG9kb0l0ZW1zW2luZGV4XS50aXRsZSA9IGlucHV0VGl0bGUudmFsdWU7XG4gICAgICAgIHRvZG9JdGVtc1tpbmRleF0uZGVzY3JpcHRpb24gPSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICB0b2RvSXRlbXNbaW5kZXhdLmR1ZURhdGU9IGlucHV0RHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdG9kb0l0ZW1zW2luZGV4XS5wcmlvcml0eSA9IGlucHV0UHJpb3JpdHkudmFsdWU7XG5cbiAgICAgICAgcHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5LnZhbHVlO1xuXG4gICAgICAgIHNldHRpbmdQcmlvcml0eSgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9JdGVtc1tpbmRleF0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmVkIGl0ZW0ncyBwcmlvcml0eSBpczogXCIgKyB0b2RvSXRlbXNbaW5kZXhdLnByaW9yaXR5KTtcblxuICAgICAgICBzaG93SXRlbS5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgc2hvd0l0ZW0uYXBwZW5kQ2hpbGQobmV3RHVlRGF0ZSk7XG5cbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgICAgIHNob3dJdGVtLnJlbW92ZUNoaWxkKGlucHV0RGVzY3JpcHRpb24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dER1ZURhdGUpO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChzYXZlQnV0dG9uKTtcbiAgICAgICAgc2hvd0l0ZW0ucmVtb3ZlQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBzaG93SXRlbS5yZW1vdmVDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHNob3dJdGVtLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdGluZ1wiLCBcImZhbHNlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRpdiBJUyBOT1QgYmVpbmcgZWRpdGVkIHJpZ2h0IG5vdy5cIik7XG4gICAgfSk7XG5cbn0iXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImV4cG9ydHMiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwcmlvcml0eSIsInNldHRpbmdQcmlvcml0eSIsInNob3dJdGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGVja0NoZWNrYm94IiwiZXZlbnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpYWxvZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYWRkSXRlbSIsImNsb3NlRGlhbG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dNb2RhbCIsInJlc2V0IiwiY2xvc2UiLCJJdGVtIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInRoaXMiLCJ0b2RvSXRlbXMiLCJ2YWx1ZSIsImxlbmd0aCIsImFsZXJ0IiwiaXRlbSIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwiY2hlY2tib3giLCJ0eXBlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2hvd1RpdGxlIiwic2hvd0Rlc2NyaXB0aW9uIiwic2hvd0R1ZURhdGUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImUiLCJpbnB1dFRpdGxlIiwiaW5wdXREZXNjcmlwdGlvbiIsImlucHV0RHVlRGF0ZSIsImlucHV0UHJpb3JpdHkiLCJvcHRpb25Mb3ciLCJvcHRpb25Ob3JtYWwiLCJvcHRpb25IaWdoIiwiaW5uZXJUZXh0IiwiY2hpbGRyZW4iLCJvcmlnaW5hbFRpdGxlIiwiZmlyc3RDaGlsZCIsIm9yaWdpbmFsRGVzY3JpcHRpb24iLCJvcmlnaW5hbER1ZURhdGUiLCJvcmlnaW5hbFByaW9yaXR5Iiwic2VsZWN0ZWQiLCJyZW1vdmVDaGlsZCIsInNhdmVCdXR0b24iLCJjbG9zZUJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwiZm9udFN0eWxlIiwiaW5kZXgiLCJlZGl0U2hvd0l0ZW0iLCJzaG93aW5nSXRlbXMiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=