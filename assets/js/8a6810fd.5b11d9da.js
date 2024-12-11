"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63125],{62168:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"managing-your-application-resources","title":"Managing your application resources","description":"Cover useful actions available to manage your application resources","source":"@site/tutorial/managing-your-application-resources.md","sourceDirName":".","slug":"/managing-your-application-resources","permalink":"/tutorial/managing-your-application-resources","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"podman-desktop","permalink":"/tutorial/tags/podman-desktop"},{"inline":true,"label":"managing-resources","permalink":"/tutorial/tags/managing-resources"},{"inline":true,"label":"managing-kubernetes-resources","permalink":"/tutorial/tags/managing-kubernetes-resources"}],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Managing your application resources","description":"Cover useful actions available to manage your application resources","keywords":["podman desktop","podman","pod","Containerfile","Dockerfile"],"tags":["podman-desktop","managing-resources","managing-kubernetes-resources"]},"sidebar":"defaultSidebar","previous":{"title":"Interacting with a database server","permalink":"/tutorial/interacting-with-a-database-server"},"next":{"title":"Running an AI application","permalink":"/tutorial/running-an-ai-application"}}');var t=s(62540),r=s(43023);const o={sidebar_position:6,title:"Managing your application resources",description:"Cover useful actions available to manage your application resources",keywords:["podman desktop","podman","pod","Containerfile","Dockerfile"],tags:["podman-desktop","managing-resources","managing-kubernetes-resources"]},a="Managing your application resources",l={},c=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Managing containers and pods",id:"managing-containers-and-pods",level:2},{value:"Managing images",id:"managing-images",level:2},{value:"Managing volumes",id:"managing-volumes",level:2},{value:"Managing Kubernetes objects",id:"managing-kubernetes-objects",level:2},{value:"Managing other resources",id:"managing-other-resources",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"managing-your-application-resources",children:"Managing your application resources"})}),"\n",(0,t.jsx)(n.p,{children:"This tutorial covers the tasks that you can perform to manage the following resources visually:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Containers and pods"}),"\n",(0,t.jsx)(n.li,{children:"Images"}),"\n",(0,t.jsx)(n.li,{children:"Volumes"}),"\n",(0,t.jsx)(n.li,{children:"Kubernetes objects"}),"\n",(0,t.jsx)(n.li,{children:"Other resources, such as Podman machines, clusters, and CLI tools"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Several useful actions are available in the UI to make resource management easy."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/installation",children:"Installed Podman Desktop"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/podman/creating-a-podman-machine",children:"A running Podman machine"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/kubernetes/viewing-and-selecting-current-kubernetes-context",children:"A valid Kubernetes context and connection"})," to manage Kubernetes resources."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-containers-and-pods",children:"Managing containers and pods"}),"\n",(0,t.jsx)(n.p,{children:"Based on your needs, perform any of the following actions after navigating to the component page:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Common actions for containers and pods"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"common actions",src:s(27516).A+"",width:"981",height:"362"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Search a container or pod using the search box."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Start a container or pod using the ",(0,t.jsx)(n.strong,{children:"Start"})," icon."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stop a container or pod using the ",(0,t.jsx)(n.strong,{children:"Stop"})," icon."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Delete a container or pod using the ",(0,t.jsx)(n.strong,{children:"Delete"})," icon."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You cannot delete a container if it is being used in any pods. In such cases, you must delete the pod and then delete the container."}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Bulk deletion: Select containers or pods and delete them by using the ",(0,t.jsx)(n.strong,{children:"Delete"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the name of the container or pod to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View its summary and logs."}),"\n",(0,t.jsx)(n.li,{children:"View its kube configuration if the container or pod is a Kubernetes resource."}),"\n",(0,t.jsx)(n.li,{children:"Interact with the container using a terminal"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"View containers or pods based on their status:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Running"})," tab to view all running containers or pods"]}),"\n",(0,t.jsxs)(n.li,{children:["Select the ",(0,t.jsx)(n.strong,{children:"Stopped"})," tab to view all stopped containers or pods"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Prune"})," button to remove all unused containers or pods from the Podman engine."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Container-specific actions"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"container actions",src:s(4826).A+"",width:"979",height:"261"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Create"})," button to create a container with a container or docker file or from an existing image."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a pod with selected containers using the ",(0,t.jsx)(n.strong,{children:"Create Pod"})," button."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the overflow menu to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Open and view logs."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Kubernetes action"}),": Generate and view configuration for a Kubernetes container."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Kubernetes action"}),": Deploy a container to a Kubernetes cluster."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Kubernetes action"}),": Open a browser to check the cluster status."]}),"\n",(0,t.jsx)(n.li,{children:"Open a terminal to interact with the container."}),"\n",(0,t.jsx)(n.li,{children:"Restart your container."}),"\n",(0,t.jsx)(n.li,{children:"Export a container to your local machine."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"You might see varying options in the overflow menu based on status and configuration of the container."})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Pod-specific actions"})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pod actions",src:s(75947).A+"",width:"983",height:"274"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["View the status of each container by hovering over it in the ",(0,t.jsx)(n.em,{children:"CONTAINERS"})," column. The status can be ",(0,t.jsx)(n.code,{children:"Running"}),", ",(0,t.jsx)(n.code,{children:"Created"}),", ",(0,t.jsx)(n.code,{children:"Exited"}),", or ",(0,t.jsx)(n.code,{children:"Waiting"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a pod from a Kubernetes YAML file using the ",(0,t.jsx)(n.strong,{children:"Play Kubernetes YAML"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Use the overflow menu to:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Kubernetes action"}),": Generate and view configuration for a Kubernetes pod."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Kubernetes action"}),": Deploy a pod to a Kubernetes cluster."]}),"\n",(0,t.jsx)(n.li,{children:"Restart your pod."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-images",children:"Managing images"}),"\n",(0,t.jsx)(n.p,{children:"Perform any of the following actions after navigating to the component page:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image actions",src:s(75320).A+"",width:"995",height:"268"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Search an image using the search box."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a container from the image using the ",(0,t.jsx)(n.strong,{children:"Run"})," icon."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Delete an image using the ",(0,t.jsx)(n.strong,{children:"Delete"})," icon."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You cannot delete an image if it is being used in any containers. In such cases, you must delete the container and then delete the image."}),"\n",(0,t.jsx)(n.li,{children:"By selecting multiple images, you can delete or save them in a single step."}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the overflow menu to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Push an image to a configured registry."}),"\n",(0,t.jsx)(n.li,{children:"Edit the image name and tag."}),"\n",(0,t.jsx)(n.li,{children:"View history to check the commands that created each layer of the image."}),"\n",(0,t.jsx)(n.li,{children:"Save an image to your local machine."}),"\n",(0,t.jsx)(n.li,{children:"Push an image to a cluster, such as a Kind or Developer Sandbox cluster."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access other useful actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Prune"})," button to remove all unused images from the Podman engine."]}),"\n",(0,t.jsx)(n.li,{children:"Load images from a tar archive on your local machine."}),"\n",(0,t.jsx)(n.li,{children:"Import images from your local machine into the Podman Desktop application."}),"\n",(0,t.jsx)(n.li,{children:"Pull an image from a configured registry."}),"\n",(0,t.jsx)(n.li,{children:"Build an image from a container or docker file."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-volumes",children:"Managing volumes"}),"\n",(0,t.jsx)(n.p,{children:"Perform any of the following actions after navigating to the component page:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"volume actions",src:s(10621).A+"",width:"998",height:"235"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Search a volume using the search box."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Delete"})," icon to delete a volume. You can also select multiple volumes and delete them in one step by using the delete button on the page."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You cannot delete a volume if it is being used in any containers. In such cases, you must delete the container and then delete the volume."}),"\n",(0,t.jsx)(n.li,{children:"By selecting multiple volumes, you can delete them in a single step."}),"\n"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Click the name of the volume to view its summary."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Access other useful actions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"Prune"})," button to remove unused volumes from the Podman engine."]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Gather volume sizes"})," to determine the size used for volumes."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the ",(0,t.jsx)(n.strong,{children:"Create"})," button to create a volume."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-kubernetes-objects",children:"Managing Kubernetes objects"}),"\n",(0,t.jsx)(n.p,{children:"Perform any of the following actions after navigating to the component page:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"object actions",src:s(35250).A+"",width:"976",height:"239"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Search for objects using the search box."}),"\n",(0,t.jsxs)(n.li,{children:["Delete an object using the ",(0,t.jsx)(n.strong,{children:"Delete"})," icon."]}),"\n",(0,t.jsxs)(n.li,{children:["Create an object using the ",(0,t.jsx)(n.strong,{children:"Apply YAML"})," button."]}),"\n",(0,t.jsxs)(n.li,{children:["Click the name of the object to:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View its summary"}),"\n",(0,t.jsx)(n.li,{children:"View its Kubernetes configuration"}),"\n",(0,t.jsx)(n.li,{children:"Edit its Kubernetes configuration and apply those changes to your cluster."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"managing-other-resources",children:"Managing other resources"}),"\n",(0,t.jsx)(n.p,{children:"You can manage other resources, such as your Podman machine, cluster, or CLI tools using the Podman Desktop Settings."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Managing your Podman machine"})})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Settings > Resources"})," page, perform any of the following actions:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"podman machine set up",src:s(97910).A+"",width:"1506",height:"538"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new Podman machine."}),"\n",(0,t.jsx)(n.li,{children:"Set up Podman machine preferences."}),"\n",(0,t.jsx)(n.li,{children:"Access other useful actions to start, restart, stop, edit, or delete a Podman machine."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Managing your cluster"})})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.strong,{children:"Settings > Resources"})," page, perform any of the following actions:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"cluster set up",src:s(53411).A+"",width:"742",height:"187"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new cluster."}),"\n",(0,t.jsx)(n.li,{children:"Access other useful actions to start, restart, stop, or delete a cluster."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Managing your CLI tools"})})}),"\n",(0,t.jsx)(n.p,{children:"If you have installed a CLI tool extension, you can set up the CLI tool and upgrade to its latest version from the UI."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Settings > Resources"})," page, click ",(0,t.jsx)(n.strong,{children:"Setup"})," to download the CLI tool and install it system wide."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CLI set up",src:s(40286).A+"",width:"742",height:"155"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.strong,{children:"Settings > CLI tools"})," page, click the updates available icon to upgrade to the latest version of the CLI tool:"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CLI update",src:s(21889).A+"",width:"1506",height:"346"})}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/containers",children:"Working with containers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/containers/images",children:"Working with images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/kubernetes",children:"Working with Kubernetes"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21889:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/cli-update-537c1c8a94635c86d844041f5a71e24f.png"},53411:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/cluster-setup-b50234086ef7473038c387a3e814f960.png"},27516:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/common-actions-4a63dec5f333ab703c96e0946ed8ab12.png"},4826:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/container-actions-bdff7c566c75aa5d4cd780dbcb9a71ff.png"},75320:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/image-actions-b792e9368954bf5671fd8c9bef03ad0b.png"},35250:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/object-actions-31f08c9969ad4b0cc9e8298fad746112.png"},97910:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/podman-setup-fcc978269bd027b3d10b5290d667d61b.png"},75947:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/pods-actions-ee61f1d000521151e126618ace3f50a7.png"},40286:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/set-up-cli-ec80f5d1ff226241882d2bc87a37afe9.png"},10621:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/volume-actions-7fa29553610b0ca3ecc194bccee8dedc.png"},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(63696);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);