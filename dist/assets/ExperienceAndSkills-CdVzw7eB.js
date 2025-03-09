import{r as n,c as a,o as l,a as t,q as p,F as i,b as d,t as o,n as f}from"./index-BqA7COsd.js";const u="/Portfolio/image/tadeco.png",_={class:"text-white mt-6",id:"skills"},h={class:"md:grid md:grid-cols-12 gap-8 items-start py-8 px-4 xl:gap-16 xl:px-16"},w={class:"md:col-span-6 grid grid-cols-2 gap-6 md:gap-8","data-aos":"flip-left"},y={class:"text-xl font-bold uppercase text-white"},v={class:"flex items-center"},k={class:"pl-1 text-sm text-primary"},D={class:"md:col-span-6","data-aos":"flip-left"},E={class:"space-y-8 py-8","data-aos":"fade-left"},B={class:"w-3/4 pl-4"},S={class:"text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},A={class:"text-white"},F={class:"text-white"},L={class:"px-4 xl:px-16","data-aos":"fade-up"},M={class:"bg-[#111a3e] py-8 sm:py-6"},N={class:"mx-auto max-w-7xl px-6 lg:px-8 mb-2"},T={class:"grid mx-auto gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 items-center justify-center"},V=["href"],j=["src"],P={__name:"ExperienceAndSkills",setup(C){const m=r=>["Beginner","Novice","Intermediate","Proficient","Expert"][r-1],g=n([{id:1,name:"Data Analysis",rating:5},{id:2,name:"SQL Management",rating:4},{id:3,name:"Front-End Dev",rating:2},{id:4,name:"Back-End Dev",rating:4},{id:5,name:"Advance Excel & VBA",rating:5}]),x=n([{id:1,role:"Data Analyst & Web Developer",company:"Tagum Agricultural Development Co., Inc.",date:`September 2019 - ${new Date().toLocaleString("default",{month:"long"})} ${new Date().getFullYear()}`}]),b=n([{id:1,loc:"./image/badge1.png",link:"https://www.credly.com/badges/4a5442fe-8f16-4d9c-a0a3-a1378f1dff94/public_url"},{id:4,loc:"./image/badge4.png",link:"https://www.credly.com/badges/94ffe539-2bda-43e1-bb03-4fd1958ad95a/public_url"},{id:2,loc:"./image/badge2.png",link:"https://www.credly.com/badges/309d8f0b-7d22-4d5a-ba06-5aecda58ae14/public_url"},{id:3,loc:"./image/badge3.png",link:"https://www.credly.com/badges/442390f9-bdc8-4f15-974e-24992cfb007a/public_url"}]);return(r,s)=>(l(),a("section",_,[t("div",h,[t("div",w,[s[1]||(s[1]=t("div",{class:"col-span-2 mb-4"},[t("h2",{class:"text-4xl font-bold text-white text-left mb-4"},[p(" My "),t("span",{class:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"},"Skills")])],-1)),(l(!0),a(i,null,d(g.value,e=>(l(),a("div",{key:e.id,class:"mt-1 flex flex-col items-start"},[t("h4",y,o(e.name),1),t("div",v,[(l(),a(i,null,d(5,c=>t("span",{key:c,class:f(["text-xl mr-1",c<=e.rating?"text-yellow-500":"text-gray-500"])}," ★ ",2)),64)),s[0]||(s[0]=p()),t("span",k," ("+o(m(e.rating))+") ",1)])]))),128))]),t("div",D,[s[3]||(s[3]=t("h2",{class:"text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8"},"My Experiences",-1)),t("div",E,[(l(!0),a(i,null,d(x.value,e=>(l(),a("div",{key:e.id,class:"flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]"},[s[2]||(s[2]=t("div",{class:"w-1/4"},[t("div",{class:"bg-white p-2 inline-block rounded-[5%] shadow-md"},[t("img",{src:u,alt:"lawyer",class:"w-full h-auto"})])],-1)),t("div",B,[t("h3",S,o(e.role),1),t("p",A,o(e.company),1),t("p",F,o(e.date),1)])]))),128))])])]),t("div",L,[s[4]||(s[4]=t("h2",{class:"text-4xl font-bold text-white text-left mb-8 mt-8 md:text-center md:mt-0"},"Badges",-1)),t("div",M,[t("div",N,[t("div",T,[(l(!0),a(i,null,d(b.value,e=>(l(),a("a",{key:e.id,href:e.link,target:"_blank",rel:"noopener noreferrer"},[t("img",{src:e.loc,alt:"Tool",class:"max-w-full h-auto object-contain mx-auto",width:"158",height:"48"},null,8,j)],8,V))),128))])])])])]))}};export{P as default};
