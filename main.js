(()=>{"use strict";function e(){const e=document.createElement("h1");e.append(document.createTextNode("Some Doggy Friendly Restaurant"));const t=document.createElement("img");return t.src="https://images.dog.ceo/breeds/terrier-irish/n02093991_3952.jpg",[e,t]}function t(){const e=document.createElement("h1");e.append(document.createTextNode("Some meals"));const t=document.createElement("ul"),n=e=>{const t=document.createElement("li");return t.append(document.createTextNode(e)),t};return t.append(n("meal one"),n("meal two"),n("meal three"),n("meal FOUR")),[e,t]}function n(){const e=document.createElement("h1");return e.append(document.createTextNode("Some Contact Infomation")),[e,document.createTextNode("tel: 1234567890123")]}const c=(...e)=>function(e){const t=document.createElement("li");return t.appendChild(e),t}(function(e,t){const n=document.createElement("a");return n.href="",n.dataset.navLink=null,n.appendChild(document.createTextNode(e)),n.addEventListener("click",(e=>{e.preventDefault(),document.querySelector("[data-router-outlet]").replaceChildren(...t())})),n}(...e));document.querySelector("body").prepend(function(){const o=document.createElement("ul");o.dataset.nav=null,o.append(c("home",e),c("menu",t),c("contact",n)),window.addEventListener("load",(()=>document.querySelector("[data-nav-link]").click()));const r=document.createElement("nav");return r.appendChild(o),r}())})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sU0FBU0EsSUFDZCxNQUFNQyxFQUFNQyxTQUFTQyxjQUFjLE1BQ25DRixFQUFJRyxPQUFPRixTQUFTRyxlQUFlLG1DQUNuQyxNQUFNQyxFQUFNSixTQUFTQyxjQUFjLE9BR25DLE9BRkFHLEVBQUlDLElBQU0saUVBRUgsQ0FBQ04sRUFBS0ssR0NOUixTQUFTRSxJQUNkLE1BQU1QLEVBQU1DLFNBQVNDLGNBQWMsTUFDbkNGLEVBQUlHLE9BQU9GLFNBQVNHLGVBQWUsZUFDbkMsTUFBTUksRUFBT1AsU0FBU0MsY0FBYyxNQUM5Qk8sRUFBWUMsSUFDaEIsTUFBTUMsRUFBT1YsU0FBU0MsY0FBYyxNQUVwQyxPQURBUyxFQUFLUixPQUFPRixTQUFTRyxlQUFlTSxJQUM3QkMsR0FTVCxPQVBBSCxFQUFLTCxPQUNITSxFQUFTLFlBQ1RBLEVBQVMsWUFDVEEsRUFBUyxjQUNUQSxFQUFTLGNBR0osQ0FBQ1QsRUFBS1EsR0NoQlIsU0FBU0ksSUFDZCxNQUFNWixFQUFNQyxTQUFTQyxjQUFjLE1BRW5DLE9BREFGLEVBQUlHLE9BQU9GLFNBQVNHLGVBQWUsNEJBQzVCLENBQUNKLEVBQUtDLFNBQVNHLGVBQWUsdUJDZXZDLE1BQU1TLEVBQU8sSUFBSUMsSUFFakIsU0FBWUMsR0FDVixNQUFNZixFQUFNQyxTQUFTQyxjQUFjLE1BRW5DLE9BREFGLEVBQUlnQixZQUFZRCxHQUNUZixFQUxpQmlCLENBZDFCLFNBQWVDLEVBQU1DLEdBQ25CLE1BQU1DLEVBQU9uQixTQUFTQyxjQUFjLEtBVXBDLE9BVEFrQixFQUFLQyxLQUFPLEdBQ1pELEVBQUtFLFFBQVFDLFFBQVUsS0FDdkJILEVBQUtKLFlBQVlmLFNBQVNHLGVBQWVjLElBQ3pDRSxFQUFLSSxpQkFBaUIsU0FBVUMsSUFDOUJBLEVBQUdDLGlCQUNIekIsU0FDRzBCLGNBQWMsd0JBQ2RDLG1CQUFtQlQsUUFFakJDLEVBR29CUyxJQUFTZixJQ2hCdENiLFNBQVMwQixjQUFjLFFBQVFHLFFEd0J4QixXQUNMLE1BQU1DLEVBQUs5QixTQUFTQyxjQUFjLE1BQ2xDNkIsRUFBR1QsUUFBUVUsSUFBTSxLQUNqQkQsRUFBRzVCLE9BQU9VLEVBQUssT0FBUWQsR0FBT2MsRUFBSyxPQUFRTixHQUFPTSxFQUFLLFVBQVdELElBRWxFcUIsT0FBT1QsaUJBQWlCLFFBQVEsSUFDOUJ2QixTQUFTMEIsY0FBYyxtQkFBbUJPLFVBRzVDLE1BQU1GLEVBQU0vQixTQUFTQyxjQUFjLE9BRW5DLE9BREE4QixFQUFJaEIsWUFBWWUsR0FDVEMsRUNuQzhCRyxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRtcC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTb21lIERvZ2d5IEZyaWVuZGx5IFJlc3RhdXJhbnRcIikpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc3JjID0gXCJodHRwczovL2ltYWdlcy5kb2cuY2VvL2JyZWVkcy90ZXJyaWVyLWlyaXNoL24wMjA5Mzk5MV8zOTUyLmpwZ1wiO1xuXG4gIHJldHVybiBbdG1wLCBpbWddO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdG1wLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNvbWUgbWVhbHNcIikpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBtZW51SXRlbSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpdGVtLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuYW1lKSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG4gIG1lbnUuYXBwZW5kKFxuICAgIG1lbnVJdGVtKFwibWVhbCBvbmVcIiksXG4gICAgbWVudUl0ZW0oXCJtZWFsIHR3b1wiKSxcbiAgICBtZW51SXRlbShcIm1lYWwgdGhyZWVcIiksXG4gICAgbWVudUl0ZW0oXCJtZWFsIEZPVVJcIilcbiAgKTtcblxuICByZXR1cm4gW3RtcCwgbWVudV07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0bXAuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU29tZSBDb250YWN0IEluZm9tYXRpb25cIikpO1xuICByZXR1cm4gW3RtcCwgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJ0ZWw6IDEyMzQ1Njc4OTAxMjNcIildO1xufVxuIiwiaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuXG5mdW5jdGlvbiBfTGluayh0ZXh0LCBjb21wb25lbnQpIHtcbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBsaW5rLmhyZWYgPSBcIlwiO1xuICBsaW5rLmRhdGFzZXQubmF2TGluayA9IG51bGw7XG4gIGxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXJvdXRlci1vdXRsZXRdXCIpXG4gICAgICAucmVwbGFjZUNoaWxkcmVuKC4uLmNvbXBvbmVudCgpKTtcbiAgfSk7XG4gIHJldHVybiBsaW5rO1xufVxuXG5jb25zdCBMaW5rID0gKC4uLmFyZ3MpID0+IGxpKF9MaW5rKC4uLmFyZ3MpKTtcblxuZnVuY3Rpb24gbGkobm9kZSkge1xuICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRtcC5hcHBlbmRDaGlsZChub2RlKTtcbiAgcmV0dXJuIHRtcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVsLmRhdGFzZXQubmF2ID0gbnVsbDtcbiAgdWwuYXBwZW5kKExpbmsoXCJob21lXCIsIEhvbWUpLCBMaW5rKFwibWVudVwiLCBNZW51KSwgTGluayhcImNvbnRhY3RcIiwgQ29udGFjdCkpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PlxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXYtbGlua11cIikuY2xpY2soKVxuICApO1xuXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHJldHVybiBuYXY7XG59XG4iLCJpbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9uYXZcIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikucHJlcGVuZChOYXYoKSk7XG4iXSwibmFtZXMiOlsiSG9tZSIsInRtcCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImNyZWF0ZVRleHROb2RlIiwiaW1nIiwic3JjIiwiTWVudSIsIm1lbnUiLCJtZW51SXRlbSIsIm5hbWUiLCJpdGVtIiwiQ29udGFjdCIsIkxpbmsiLCJhcmdzIiwibm9kZSIsImFwcGVuZENoaWxkIiwibGkiLCJ0ZXh0IiwiY29tcG9uZW50IiwibGluayIsImhyZWYiLCJkYXRhc2V0IiwibmF2TGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInByZXZlbnREZWZhdWx0IiwicXVlcnlTZWxlY3RvciIsInJlcGxhY2VDaGlsZHJlbiIsIl9MaW5rIiwicHJlcGVuZCIsInVsIiwibmF2Iiwid2luZG93IiwiY2xpY2siLCJOYXYiXSwic291cmNlUm9vdCI6IiJ9