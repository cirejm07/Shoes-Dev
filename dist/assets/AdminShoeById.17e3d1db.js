import{_ as D,r as s,n as B,D as I,z as H,B as S,c as w,b as t,t as c,y as R,o as U,u as z,p as A,k as j}from"./index.eb1e09f3.js";const C={name:"AdminShoeById",setup(){const a=s(null),n=R(),i=z(),e=[];a.value=n.params.id;const d=s(null),r=s(null),l=s(null),u=s(null),_=s(null),p=s(null),m=s(null);return B(async()=>{const g=I(H,a.value);e.value=g,console.log(e);const o=await S(g);if(o.exists()){let h=o.data().imageUrl;d.value=h;let v=o.data().name;r.value=v;let y=o.data().description;l.value=y;let f=o.data().price;u.value=f;let b=o.data().size;_.value=b;let x=o.data().category;p.value=x;let k=o.data().gender;m.value=k}else console.log("No such document!")}),{cityId:a,shoeRef:e,imageUrl:d,name:r,description:l,price:u,size:_,category:p,gender:m,backHistoryHandler:()=>{i.go(-1)}}}},N=a=>(A("data-v-0a4e5468"),a=a(),j(),a),E={class:"container mt-2 d-flex justify-content-center align-items-center"},M={class:"row container"},V={class:"col-md-6 d-md-flex justify-content-md-end"},q=["src","alt"],F={class:"flex"},G={class:"col-md-6 text-start"},J={class:"fw-bold lead"},K=["src"],L=N(()=>t("p",{class:"btn btn-dark border rounded-1 mt-3"},"Add to cart",-1));function O(a,n,i,e,d,r){return U(),w("div",E,[t("div",M,[t("div",V,[t("div",null,[t("img",{src:e.imageUrl,alt:e.name},null,8,q),t("div",F,[t("p",{onClick:n[0]||(n[0]=(...l)=>e.backHistoryHandler&&e.backHistoryHandler(...l)),class:"btn btn-outline-dark mt-3"},"Back")])])]),t("div",G,[t("span",J,c(e.name),1),t("p",null,c(e.gender)+" shoe",1),t("p",null,"\u20B1 "+c(e.price),1),t("img",{src:e.imageUrl,style:{width:"50px",height:"50px",border:"1px solid black","border-radius":"5px"}},null,8,K),L,t("p",null,c(e.description),1)])])])}const T=D(C,[["render",O],["__scopeId","data-v-0a4e5468"]]);export{T as default};