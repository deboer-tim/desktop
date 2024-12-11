"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60603],{52206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var a=n(2738),i=n(62540),o=n(43023);const s={title:"Podman AI Lab - For developers to build AI Applications with LLMs running locally",description:"Learn how to create your first AI application, by using Podman AI Lab",slug:"podman-ai-lab-create-ai-app-with-llm-running-locally",authors:["phmartin"],tags:["podman-desktop","extension","ai","llm","local"],hide_table_of_contents:!1},r="Our first AI Application",l={authorsImageUrls:[void 0]},d=[{value:"Preparing Podman Desktop and Podman AI Lab",id:"preparing-podman-desktop-and-podman-ai-lab",level:2},{value:"Testing a prompt with a model",id:"testing-a-prompt-with-a-model",level:2},{value:"Testing a recipe",id:"testing-a-recipe",level:2},{value:"Structure of a recipe",id:"structure-of-a-recipe",level:3},{value:"Creating our own app",id:"creating-our-own-app",level:2},{value:"Testing my own app locally",id:"testing-my-own-app-locally",level:2},{value:"Creating a recipe",id:"creating-a-recipe",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"banner",src:n(18239).A+"",width:"1216",height:"832"})}),"\n",(0,i.jsx)(t.p,{children:"Red Hat provides an extension to Podman Desktop, Podman AI Lab, which lets developers discover examples of applications by using large language models (LLMs), and gives them a framework to create their own AI-based applications and share them with their team."}),"\n",(0,i.jsx)(t.p,{children:"We will discover, through this article, the different steps to create our first AI application, and to add it to the catalog of recipes of Podman AI Lab."}),"\n",(0,i.jsx)(t.p,{children:"For our first experiment, we will work on a micro-service for the podman-desktop.io website. The micro-service would receive the search terms from the website, and would ask the model to find the best matching pages, before returning the result to the website."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"my first app",src:n(48938).A+"",width:"1016",height:"574"})}),"\n",(0,i.jsx)(t.h2,{id:"preparing-podman-desktop-and-podman-ai-lab",children:"Preparing Podman Desktop and Podman AI Lab"}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't done it yet, first ",(0,i.jsx)(t.a,{href:"https://podman-desktop.io/docs/ai-lab/installing",children:"install Podman Desktop and its extension Podman AI Lab"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To have a better experience, it is recommended to use the GPU acceleration to serve the model. If you have such a GPU on your machine, you will need to create a Podman machine with the LibKrun provider (on MacOS). More details on ",(0,i.jsx)(t.a,{href:"https://developers.redhat.com/articles/2024/09/10/gpu-support-podman-ai-lab",children:"the GPU support for Podman AI Lab"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"At the time of writing, the GPU support is still experimental on Podman AI Lab. You will need to enable the option on the Preferences to enable it."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a podman machine running using libkrun",src:n(99375).A+"",width:"1440",height:"502"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"GPU support for inference servers preference is enabled",src:n(86611).A+"",width:"1504",height:"632"})}),"\n",(0,i.jsx)(t.h2,{id:"testing-a-prompt-with-a-model",children:"Testing a prompt with a model"}),"\n",(0,i.jsxs)(t.p,{children:["Podman AI Lab provides a catalog of open source models that can be used locally. You can go to the ",(0,i.jsx)(t.code,{children:"Models > Catalog"})," page to download the model of your choice. For this article, we will use the ",(0,i.jsx)(t.code,{children:"Mistral-7B-instruct"})," model."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Mistral model is downloaded",src:n(95090).A+"",width:"1758",height:"330"})}),"\n",(0,i.jsxs)(t.p,{children:["Once a model is downloaded, we can test and interact with this model to try to find the best prompt for our application. For chat models, Podman AI Lab provides a ",(0,i.jsx)(t.code,{children:"Playground"}),", so we can test different prompts and validate that the responses of the model are adequate."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's start a new playground (from the ",(0,i.jsx)(t.code,{children:"Models > Playgrounds"})," menu), and send our first prompt:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Give me a list of pages in the website podman-desktop.io related to "build an image"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The model should reply with some list of pages, in a human-readable form (see the screenshot below, for the response we received)."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a first prompt with human-readable output",src:n(74665).A+"",width:"1766",height:"1094"})}),"\n",(0,i.jsx)(t.p,{children:"The problem is that the response is in human-readable form, but we don't want the API to return this response as is. We want to have the name and the url of the pages, and send them to the website, so the website can display these pages with its preferred format."}),"\n",(0,i.jsx)(t.p,{children:"For this, we can try to ask the model to reply with a structured response, with the following prompt:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'Give me a list of pages in the website podman-desktop.io related to "build an image" as JSON output as an array of objects with 2 fields name and url\n'})}),"\n",(0,i.jsx)(t.p,{children:"This time, we received a response in JSON format, which is more suitable for our needs."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a prompt with structured output",src:n(63057).A+"",width:"1750",height:"1196"})}),"\n",(0,i.jsx)(t.p,{children:"We don't expect the user to ask such a precise question, and we would prefer to send to the model the exact question of the user, without modifying it in real time. To achieve this, chat models provide a system prompt feature. The system prompt can be defined at the beginning of the chat session."}),"\n",(0,i.jsx)(t.p,{children:"Podman AI Lab supports this feature, let's restart a Playground session with the following system prompt:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Give me a list of pages in the website podman-desktop.io related to the request as JSON output as an array of objects with 2 fields name and url\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, send the prompt ",(0,i.jsx)(t.code,{children:"build an image"}),", to simulate a realistic search input of a user."]}),"\n",(0,i.jsx)(t.p,{children:"We can see in the screenshot below that the model still returns a response suitable for our use case."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a session with a system prompt",src:n(11385).A+"",width:"1750",height:"1196"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Please note that this section was not a course on writing the best prompt, I'm sure you will find much more efficient prompts for this purpose. The purpose of this section is to demonstrate how you can iterate with Podman AI Lab to refine the prompts you want to use for your application."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"testing-a-recipe",children:"Testing a recipe"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have a suitable prompt to use for our application, it is time to start our application itself."}),"\n",(0,i.jsxs)(t.p,{children:["Many developers prefer to have a working example of application to start with, and Podman AI Lab provides such examples with a catalog of recipes, visible in the page ",(0,i.jsx)(t.code,{children:"AI Apps > Recipe Catalog"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's select the Chatbot recipe (",(0,i.jsx)(t.code,{children:"More details"})," link on the Chatbot card), and start it with the Mistral model (by pressing the ",(0,i.jsx)(t.code,{children:"Start"})," button and filling the form)."]}),"\n",(0,i.jsxs)(t.p,{children:["Once the application is started, we can access the list of running apps in the ",(0,i.jsx)(t.code,{children:"AI Apps > Running"})," page, and we can access the app's UI by clicking on the ",(0,i.jsx)(t.code,{children:"Open AI App"})," link."]}),"\n",(0,i.jsx)(t.p,{children:"We can test again by typing our prompt (not the one with a system prompt, as the recipe does not support providing a system prompt), and see that the response is very similar to the one received from the playground."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a session on the Chatbot recipe",src:n(79497).A+"",width:"1566",height:"1122"})}),"\n",(0,i.jsxs)(t.p,{children:["Back to the recipe's details page, we can access the sources of the recipe by clicking on the ",(0,i.jsx)(t.code,{children:"Open in VSCode"})," button, the respository's link or the link ",(0,i.jsx)(t.code,{children:"Local clone"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"structure-of-a-recipe",children:"Structure of a recipe"}),"\n",(0,i.jsxs)(t.p,{children:["The entrypoint of a recipe is the file ",(0,i.jsx)(t.code,{children:"ai-lab.yaml"})," present in the repository of the recipe."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's examine the content of this file (the syntax of the file is specified in ",(0,i.jsx)(t.a,{href:"https://github.com/containers/podman-desktop-extension-ai-lab/blob/main/PACKAGING-GUIDE.md#recipe-configuration-file",children:"this documentation"}),") for the chatbot example."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"version: v1.0\napplication:\n  type: language\n  name: ChatBot_Streamlit\n  description: Chat with a model service in a web frontend.\n  containers:\n    - name: llamacpp-server\n      contextdir: ../../../model_servers/llamacpp_python\n      containerfile: ./base/Containerfile\n      model-service: true\n      backend:\n        - llama-cpp\n      arch:\n        - arm64\n        - amd64\n      ports:\n        - 8001\n      image: quay.io/ai-lab/llamacpp_python:latest\n    - name: streamlit-chat-app\n      contextdir: app\n      containerfile: Containerfile\n      arch:\n        - arm64\n        - amd64\n      ports:\n        - 8501\n      image: quay.io/ai-lab/chatbot:latest\n"})}),"\n",(0,i.jsx)(t.p,{children:"The file defines two containers, one for the inference server and one for the application itself."}),"\n",(0,i.jsx)(t.p,{children:"The first container, for the inference server, is generic and can be reused for any app using a chat model."}),"\n",(0,i.jsxs)(t.p,{children:["The second one is the one we are particularly interested in. It defines how the container's image for the application is built. It points to the Containerfile used to build the image, on which we can find the source code for the app: in the ",(0,i.jsx)(t.code,{children:"app/chatbot_ui.py"})," file."]}),"\n",(0,i.jsxs)(t.p,{children:["Looking at the Python source file, we can see that the application uses the ",(0,i.jsx)(t.code,{children:"streamlit"})," framework for the UI part, and the ",(0,i.jsx)(t.code,{children:"langchain"})," framework for discussing with the model."]}),"\n",(0,i.jsxs)(t.p,{children:["We can adapt this source code, by replacing the UI part with a framework to make the app a REST service, and keep the ",(0,i.jsx)(t.code,{children:"langchain"})," part."]}),"\n",(0,i.jsxs)(t.p,{children:["An interesting part of the source code is that the recipe does not expose to the user the system prompt, but defines one internally (",(0,i.jsx)(t.code,{children:"You are world class technical advisor"}),"):"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'prompt = ChatPromptTemplate.from_messages([\n    ("system", "You are world class technical advisor."),\n    MessagesPlaceholder(variable_name="history"),\n    ("user", "{input}")\n])\n'})}),"\n",(0,i.jsx)(t.p,{children:"This is exactly what we want to do in our application, we will be able to indicate here the system prompt we have found earlier."}),"\n",(0,i.jsx)(t.h2,{id:"creating-our-own-app",children:"Creating our own app"}),"\n",(0,i.jsxs)(t.p,{children:["Adapting the source code for the purpose of our application is out of the scope of this article, let's see the result in ",(0,i.jsx)(t.a,{href:"https://github.com/redhat-developer/podman-desktop-demo/blob/main/ai-lab-demo/recipe/app/service.py",children:"our app repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["As discussed in the previous section, we have replaced the ",(0,i.jsx)(t.code,{children:"streamlit"})," part with the ",(0,i.jsx)(t.code,{children:"flask"})," framework to create a REST API with two endpoints: one for the health check on ",(0,i.jsx)(t.code,{children:"/"})," necessary for Podman AI Lab, and another one on ",(0,i.jsx)(t.code,{children:"/query"}),", which will be the endpoint on which the micro-service's user will send requests."]}),"\n",(0,i.jsx)(t.p,{children:"We have also indicated our own system prompt:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'prompt = ChatPromptTemplate.from_messages([\n    ("system", """\n        reply in JSON format with an array of objects with 2 fields name and url\n        (and with no more text than the JSON output),\n        with a list of pages in the website https://www.podman-desktop.io related to my query\n    """),\n    MessagesPlaceholder(variable_name="history"),\n    ("user", "{input}")\n])\n'})}),"\n",(0,i.jsx)(t.h2,{id:"testing-my-own-app-locally",children:"Testing my own app locally"}),"\n",(0,i.jsxs)(t.p,{children:["To iterate during the development of our app, we can test our app locally in our host system, while using the model served by Podman AI Lab. For this, we need to start a new model service from the page ",(0,i.jsx)(t.code,{children:"Models > Services"}),", by clicking the ",(0,i.jsx)(t.code,{children:"New Model Service"}),", then choosing the appropriate model (",(0,i.jsx)(t.code,{children:"Mistral-7B-instruct"})," in our case), and specifying a port number (let's say 56625)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a running inference server with Mistral model",src:n(21150).A+"",width:"1772",height:"262"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, we can run our app, by specifying through the ",(0,i.jsx)(t.code,{children:"MODEL_ENDPOINT"})," environment variable how to access the model service."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"my app running locally",src:n(41128).A+"",width:"1744",height:"1100"})}),"\n",(0,i.jsx)(t.p,{children:"Finally, we can send a request to this app running locally, and listening in the port 5000, and we can check in the screenshot below that the response is, as expected, a list of pages (name and url) in JSON format:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"a request to the micro-service",src:n(79451).A+"",width:"1352",height:"666"})}),"\n",(0,i.jsx)(t.h2,{id:"creating-a-recipe",children:"Creating a recipe"}),"\n",(0,i.jsx)(t.p,{children:"The last step is to add this application to the Podman AI Lab recipe catalog."}),"\n",(0,i.jsxs)(t.p,{children:["Podman AI Lab provides a way for a user to extend the provided catalog with its own recipes. This can be done by adding a file in a specific directory, as described ",(0,i.jsx)(t.a,{href:"https://github.com/containers/podman-desktop-extension-ai-lab/tree/main?tab=readme-ov-file#-providing-a-custom-catalog",children:"in this documentation"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "version": "1.0",\n  "recipes": [\n    {\n      "id": "search-podman-desktop-io",\n      "description" : "Search on Podman-desktop.io website",\n      "name" : "Search Podman-desktop.io",\n      "repository": "https://github.com/redhat-developer/podman-desktop-demo",\n      "ref": "main",\n      "icon": "natural-language-processing",\n      "categories": [\n        "natural-language-processing"\n      ],\n      "basedir": "ai-lab-demo/recipe",\n      "readme": "",\n      "recommended": [\n        "hf.TheBloke.mistral-7b-instruct-v0.2.Q4_K_M"\n      ],\n      "backend": "llama-cpp"\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["By creating the file ",(0,i.jsx)(t.code,{children:"$HOME/.local/share/containers/podman-desktop/extensions-storage/redhat.ai-lab/user-catalog.json"})," with the content above, you should now be able to see a new recipe ",(0,i.jsx)(t.code,{children:"Search Podman-desktop.io"})," in the recipe catalog of Podman AI Lab, and run it as any other recipe. And, of course, you can share this file with your colleagues to share with them your latest experiment."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},48938:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/00-my-first-ai-app-975275e358520eba078b928a1d6dab24.png"},99375:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/01-ai-lab-demo-libkrun-machine-156b16fdbe8420e178c1841ad4f87777.png"},86611:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/02-ai-lab-demo-gpu-preference-b07601b3bf8351400ddfe29e36cb374f.png"},95090:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/03-ai-lab-demo-mistral-model-downloaded-fae651cc75b1359854abac10de7565bd.png"},74665:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/04-ai-lab-demo-prompt-1-75066ea8b569d8340f75ba7d133cfd2a.png"},63057:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/05-ai-lab-demo-prompt-json-a401e74714648bea7435dd03e1472fd8.png"},11385:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/06-ai-lab-demo-system-prompt-7569049a092952cf0bf43ce8aa05b3fa.png"},79497:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/07-ai-lab-demo-recipe-session-45f989e2f16ee20e4e7e0af826461e7f.png"},21150:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/08-ai-lab-demo-inference-server-39bdfa098bc1b65c8c2835223f92556b.png"},41128:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/09-ai-lab-demo-my-app-local-aa55b298edb1f3a0cc25347006ea6849.png"},79451:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/10-ai-lab-demo-my-app-http-request-b93e4de45b3add66d3f97c73c5f0ffea.png"},18239:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/banner-1f24d8fca8ff7163882c09d2d0a667cb.png"},43023:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(63696);const i={},o=a.createContext(i);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:t},e.children)}},2738:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-ai-lab-create-ai-app-with-llm-running-locally","source":"@site/blog/2024-11-26-ai-lab-first-app.md","title":"Podman AI Lab - For developers to build AI Applications with LLMs running locally","description":"Learn how to create your first AI application, by using Podman AI Lab","date":"2024-11-26T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"extension","permalink":"/blog/tags/extension"},{"inline":true,"label":"ai","permalink":"/blog/tags/ai"},{"inline":true,"label":"llm","permalink":"/blog/tags/llm"},{"inline":true,"label":"local","permalink":"/blog/tags/local"}],"readingTime":8.31,"hasTruncateMarker":false,"authors":[{"name":"Philippe Martin","title":"Principal Software Engineer","url":"https://github.com/feloy","imageURL":"https://github.com/feloy.png","key":"phmartin","page":null}],"frontMatter":{"title":"Podman AI Lab - For developers to build AI Applications with LLMs running locally","description":"Learn how to create your first AI application, by using Podman AI Lab","slug":"podman-ai-lab-create-ai-app-with-llm-running-locally","authors":["phmartin"],"tags":["podman-desktop","extension","ai","llm","local"],"hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Podman Desktop + CNCF - Community Driven Move","permalink":"/blog/2024/11/14/podman-desktop-cncf"}}')}}]);