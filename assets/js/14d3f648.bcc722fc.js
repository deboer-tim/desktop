"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81563],{51577:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"interacting-with-a-database-server","title":"Interacting with a database server","description":"Interacting with databases from the Podman Desktop application","source":"@site/tutorial/interacting-with-a-database-server.md","sourceDirName":".","slug":"/interacting-with-a-database-server","permalink":"/tutorial/interacting-with-a-database-server","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"podman-desktop","permalink":"/tutorial/tags/podman-desktop"},{"inline":true,"label":"interacting-with-databases","permalink":"/tutorial/tags/interacting-with-databases"}],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Interacting with a database server","description":"Interacting with databases from the Podman Desktop application","keywords":["podman desktop","podman","databases"],"tags":["podman-desktop","interacting-with-databases"]},"sidebar":"defaultSidebar","previous":{"title":"Deploying a Kubernetes application","permalink":"/tutorial/deploying-a-kubernetes-application"},"next":{"title":"Managing your application resources","permalink":"/tutorial/managing-your-application-resources"}}');var i=s(62540),a=s(43023);const r={sidebar_position:5,title:"Interacting with a database server",description:"Interacting with databases from the Podman Desktop application",keywords:["podman desktop","podman","databases"],tags:["podman-desktop","interacting-with-databases"]},c="Interacting with a database server",o={},l=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Pulling a PostgreSQL server image",id:"pulling-a-postgresql-server-image",level:2},{value:"Creating a PostgreSQL server instance",id:"creating-a-postgresql-server-instance",level:2},{value:"Accessing the instance from terminal",id:"accessing-the-instance-from-terminal",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interacting-with-a-database-server",children:"Interacting with a database server"})}),"\n",(0,i.jsx)(n.p,{children:"This tutorial covers the following end-to-end tasks required to interact with a database server from within the Podman Desktop UI:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pulling a database server image"}),"\n",(0,i.jsx)(n.li,{children:"Creating a database server instance"}),"\n",(0,i.jsx)(n.li,{children:"Accessing the instance from terminal"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For creating a database instance, you can use one of the following options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/containers/images/building-an-image",children:"Build a database server image using a container or docker file"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/tutorial/managing-your-application-resources#managing-images",children:"Import a database server image from your local machine"})," using the ",(0,i.jsx)(n.strong,{children:"Import"})," button on the ",(0,i.jsx)(n.em,{children:"Images"})," component page"]}),"\n",(0,i.jsx)(n.li,{children:"Pull a database server image from a registry (covered in this tutorial)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial focuses on creating a PostgreSQL server instance by pulling the ",(0,i.jsx)(n.code,{children:"quay.io/fedora/postgresql-16"})," image from the ",(0,i.jsx)(n.em,{children:"quay.io"})," registry."]}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,i.jsx)(n.p,{children:"Make sure you have:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/installation",children:"Installed Podman Desktop"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/podman/creating-a-podman-machine",children:"A running Podman machine"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"A developer role."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pulling-a-postgresql-server-image",children:"Pulling a PostgreSQL server image"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Images"})," in the left navigation pane."]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Pull"})," button.\n",(0,i.jsx)(n.img,{alt:"pulling an image",src:s(33903).A+"",width:"983",height:"187"})]}),"\n",(0,i.jsx)(n.li,{children:"Enter the name of the image to pull from the registry."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Pull image"}),". A download complete notification opens.\n",(0,i.jsx)(n.img,{alt:"clicking the pull button",src:s(71925).A+"",width:"981",height:"546"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Done"}),".\n",(0,i.jsx)(n.img,{alt:"image pulled successfully",src:s(375).A+"",width:"979",height:"316"})]}),"\n",(0,i.jsxs)(n.li,{children:["View the newly created ",(0,i.jsx)(n.code,{children:"quay.io/fedora/postgresql-16"})," image on the same page.\n",(0,i.jsx)(n.img,{alt:"image added on the page",src:s(26374).A+"",width:"996",height:"177"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-postgresql-server-instance",children:"Creating a PostgreSQL server instance"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Images"})," in the left navigation pane."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"Run Image"})," icon corresponding to the PostgreSQL server image you want to run.\n",(0,i.jsx)(n.img,{alt:"running an image",src:s(21006).A+"",width:"991",height:"185"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the basic details, such as container name, port mapping, and environment variables for the PostgreSQL server instance."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Start Container"}),".\n",(0,i.jsx)(n.img,{alt:"starting a container",src:s(77942).A+"",width:"994",height:"622"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["View the successful operation notification in the ",(0,i.jsx)(n.em,{children:"Tty"})," tab of the ",(0,i.jsx)(n.em,{children:"Container Details"})," page.\n",(0,i.jsx)(n.img,{alt:"sql server started",src:s(38519).A+"",width:"1005",height:"574"})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can also check the ",(0,i.jsx)(n.em,{children:"Logs"})," tab for the same notification."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.strong,{children:"close"})," icon on the right hand side of the page."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Containers"})," in the left navigation pane."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["View the newly created PostgreSQL server container on the page.\n",(0,i.jsx)(n.img,{alt:"database container created",src:s(38175).A+"",width:"994",height:"393"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"accessing-the-instance-from-terminal",children:"Accessing the instance from terminal"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Containers"})," in the left navigation pane."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click the created ",(0,i.jsx)(n.code,{children:"postgresql-database"})," container. The ",(0,i.jsx)(n.em,{children:"Container Details"})," page opens.\n",(0,i.jsx)(n.img,{alt:"database container",src:s(38175).A+"",width:"994",height:"393"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Select the ",(0,i.jsx)(n.strong,{children:"Terminal"})," tab."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"psql"})," command to connect to the database server. The prompt changes to ",(0,i.jsx)(n.code,{children:"postgres=#"}),".\n",(0,i.jsx)(n.img,{alt:"connect to the PostgreSQL server instance",src:s(46326).A+"",width:"1007",height:"201"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Interact with the database server by running any PostgreSQL commands, such as ",(0,i.jsx)(n.code,{children:"\\list"}),":\n",(0,i.jsx)(n.img,{alt:"interact with the database",src:s(80753).A+"",width:"1002",height:"305"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["To access this database server instance from inside a running application container, use the ",(0,i.jsx)(n.code,{children:"podman exec -it postgresql-database /bin/bash"})," command."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},71925:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/click-pull-image-020dee62bb11f3d9e9f3b62c2482cbb0.png"},46326:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/connect-to-postgresql-f1e17c026240963edac51b465d8ecfe4.png"},38175:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/database-container-created-96d3e084032be89d60aff3fe735e29d6.png"},375:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/image-successfully-pulled-13e3d2c1b3dd2cf2b2176b9b90ece773.png"},80753:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/interacted-with-database-5a2cd6462083643891b88f15dcfc5b0d.png"},26374:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/new-image-added-30bcc973e8ac784a28895b18d9655371.png"},38519:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/postgresql-server-started-d473dead665265b5e300cf1a879d9240.png"},33903:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pull-button-b61a933a48870abeefb656425505cdf1.png"},21006:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/run-image-icon-7bbf95c413596d1a899d3af1d30e7460.png"},77942:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/starting-a-postgresql-container-eaf09f815af6044b5c3b1fba5882fcd8.png"},43023:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(63696);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);