"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94365],{31939:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"proxy/index","title":"Restricted environments","description":"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).","source":"@site/docs/proxy/index.md","sourceDirName":"proxy","slug":"/proxy/","permalink":"/docs/proxy/","draft":false,"unlisted":false,"editUrl":"https://github.com/containers/podman-desktop/tree/main/website/docs/proxy/index.md","tags":[{"inline":true,"label":"podman-desktop","permalink":"/docs/tags/podman-desktop"},{"inline":true,"label":"installing","permalink":"/docs/tags/installing"},{"inline":true,"label":"windows","permalink":"/docs/tags/windows"},{"inline":true,"label":"macos","permalink":"/docs/tags/macos"},{"inline":true,"label":"linux","permalink":"/docs/tags/linux"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Restricted environments","description":"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).","tags":["podman-desktop","installing","windows","macos","linux"],"keywords":["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},"sidebar":"mySidebar","previous":{"title":"Installing from a Flatpak bundle","permalink":"/docs/installation/linux-install/installing-podman-desktop-from-a-flatpak-bundle"},"next":{"title":"Podman","permalink":"/docs/podman/"}}');var r=s(62540),t=s(43023),o=s(78296),l=s(22491);const a={sidebar_position:2,title:"Restricted environments",description:"Using Podman Desktop behind a proxy requiring custom Certificate Authorities (CA).",tags:["podman-desktop","installing","windows","macos","linux"],keywords:["podman desktop","containers","podman","installing","installation","windows","macos","linux"]},c="Installing in a restricted environment",d={},h=[{value:"Installing Podman Desktop and Podman",id:"installing-podman-desktop-and-podman",level:2},{value:"Verification",id:"verification",level:4},{value:"Using a proxy",id:"using-a-proxy",level:2},{value:"Verification",id:"verification-1",level:4}];function u(n){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{Details:i,Icon:a}=e;return i||x("Details",!0),a||x("Icon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"installing-in-a-restricted-environment",children:"Installing in a restricted environment"})}),"\n",(0,r.jsx)(e.p,{children:"In a restricted environment you might face the following challenges:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The default Podman Desktop and Podman installation methods download assets during the setup."}),"\n",(0,r.jsx)(e.p,{children:"However, a network restricted environment might refuse access to these external resources."}),"\n",(0,r.jsx)(e.p,{children:"Consider rather using the restricted environment installation method."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The Podman Machine receives a network address distinct to your computer network address."}),"\n",(0,r.jsx)(e.p,{children:"When you are using a VPN, you might have problems to access, from your host, resources that the Podman Machine exposes."}),"\n",(0,r.jsxs)(e.p,{children:["Consider enabling the ",(0,r.jsx)(e.strong,{children:"User mode networking"})," option when creating your Podman Machine to route the network traffic through your host."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The Podman Machine connects directly to the external network."}),"\n",(0,r.jsx)(e.p,{children:"However, a restricted environment might block all traffic no going to a proxy."}),"\n",(0,r.jsx)(e.p,{children:"Consider configuring Podman Desktop and your Podman Machine to route the traffic through a proxy."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"This tutorial is guiding you through the required steps to work in a restricted environment."}),"\n",(0,r.jsx)(e.h2,{id:"installing-podman-desktop-and-podman",children:"Installing Podman Desktop and Podman"}),"\n",(0,r.jsxs)(o.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"win",label:"Windows",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Check that your environment has:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"6 GB RAM for the Podman Machine."}),"\n",(0,r.jsxs)(e.li,{children:["Windows Subsystem for Linux version 2 (WSL 2) prerequisites. See ",(0,r.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install",children:"Enabling WSL 2"}),", ",(0,r.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/basic-commands",children:"WSL basic commands"}),", and ",(0,r.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed",children:"Troubleshooting WSL 2"}),":","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"The Windows user has administrator privileges."}),"\n",(0,r.jsx)(e.li,{children:"Windows 64bit."}),"\n",(0,r.jsx)(e.li,{children:"Windows 10 Build 19043 or greater, or Windows 11."}),"\n",(0,r.jsxs)(e.li,{children:["On a virtual machine: ",(0,r.jsx)(e.a,{href:"https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/user-guide/nested-virtualization#configure-nested-virtualization",children:"Nested Virtualization enabled"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Prepare your system."}),"\n",(0,r.jsx)(e.p,{children:"Enable the WSL feature, without installing the default Ubuntu distribution of Linux."}),"\n",(0,r.jsx)(e.p,{children:"Open the Command Prompt, and run:."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"> wsl --install --no-distribution\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Restart your computer."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Download the ",(0,r.jsx)(e.em,{children:"Installer for restricted environments"})," from to the ",(0,r.jsx)(e.a,{href:"/downloads/windows",children:"Windows downloads page"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"It has all artifacts required to install Podman Desktop and Podman, and does not require Internet access to download resources during installation.\nHowever, it does not contain additional utilities, such as Compose or Kind."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy the downloaded file to the Windows host in a restricted environment, and run it."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"Dashboard"})," screen displays: ",(0,r.jsxs)(e.em,{children:[(0,r.jsx)(a,{icon:"fa-solid fa-info",size:"lg"})," Podman needs to be set up"]}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Podman needs set up screen",src:s(80162).A+"",width:"1920",height:"1029"})}),"\n",(0,r.jsxs)(e.p,{children:["Click the ",(0,r.jsx)(e.strong,{children:"Set up"})," button."]}),"\n",(0,r.jsx)(e.p,{children:"Review and validate all confirmation screens to set up the Podman Machine."}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(e.p,{children:"Optionally, when you are using a VPN, consider enabling user mode networking:"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"When you are using a VPN, you might have problems to access, from your host, resources that the Podman Machine exposes."}),"\n",(0,r.jsxs)(e.p,{children:["To enable access from your host to resources on your Podman Machine, in the ",(0,r.jsx)(e.strong,{children:"Create Podman machine"})," screen, enable the ",(0,r.jsx)(e.strong,{children:"User mode networking (traffic relayed by a user process)"})," option."]}),"\n"]}),"\n"]})})]}),"\n"]}),"\n"]})}),(0,r.jsx)(l.A,{value:"mac",label:"macOS",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Download the ",(0,r.jsx)(e.em,{children:"Disk Image for restricted environments"})," from the ",(0,r.jsx)(e.a,{href:"/downloads/macos",children:"macOS downloads page"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"It has all artifacts required to install Podman Desktop and Podman, and does not require Internet access to download resources during installation.\nHowever, it does not contain additional utilities, such as Compose or Kind."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy the downloaded file to the macOS host in a restricted environment, and double-click it."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Drag the Podman Desktop icon to the Applications folder."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.strong,{children:"Dashboard"})," screen displays: ",(0,r.jsxs)(e.em,{children:[(0,r.jsx)(a,{icon:"fa-solid fa-info",size:"lg"})," Podman needs to be set up"]}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Podman needs set up screen",src:s(80162).A+"",width:"1920",height:"1029"})}),"\n",(0,r.jsxs)(e.p,{children:["Click the ",(0,r.jsx)(e.strong,{children:"Set up"})," button."]}),"\n",(0,r.jsx)(e.p,{children:"Review and validate all confirmation screens to set up the Podman Machine."}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["To route the network traffic through your VPN, in the ",(0,r.jsx)(e.strong,{children:"Create Podman machine"})," screen, enable the ",(0,r.jsx)(e.strong,{children:"User mode networking (traffic relayed by a user process)"})," option."]})}),"\n"]}),"\n"]})}),(0,r.jsx)(l.A,{value:"linux",label:"Linux",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"The Podman Destkop archive for restricted environments does not contain Podman CLI."}),"\n",(0,r.jsxs)(e.p,{children:["To install Podman, go to ",(0,r.jsx)(e.a,{href:"https://podman.io/",children:"the Podman website"}),", and follow the installation instructions."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Download the ",(0,r.jsx)(e.em,{children:"AMD64 binary (tar.gz)"})," archive from ",(0,r.jsx)(e.a,{href:"https://podman-desktop.io/downloads/linux",children:"the Linux Downloads page"}),"."]}),"\n",(0,r.jsx)(e.p,{children:"It has all artifacts required to install Podman Desktop, and does not require Internet access to download resources during installation.\nHowever, it does not contain additional utilities, such as Podman CLI, Compose or Kind."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy the downloaded file to the Linux host in a restricted environment, and extract the archive content."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["In the extracted directory, open the ",(0,r.jsx)(e.code,{children:"podman-desktop"})," executable file."]}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsx)(e.h4,{id:"verification",children:"Verification"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.strong,{children:"Dashboard"}),", the ",(0,r.jsx)(e.strong,{children:"Podman"})," tile displays ",(0,r.jsx)(e.em,{children:"Podman is running"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Podman is running screen",src:s(13330).A+"",width:"1920",height:"1029"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"using-a-proxy",children:"Using a proxy"}),"\n",(0,r.jsx)(e.p,{children:"Requirements:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"<your.proxy.tld:port>"}),": Your proxy URL."]}),"\n",(0,r.jsx)(e.li,{children:"Optionally: your proxy Certificate Authorities (CA) in Privacy-Enhanced Mail (PEM) format."}),"\n"]}),"\n",(0,r.jsxs)(o.A,{groupId:"operating-systems",children:[(0,r.jsx)(l.A,{value:"win",label:"Windows",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["To enable proxy settings, go to ",(0,r.jsx)(e.strong,{children:"Settings > Proxy"}),", toggle on ",(0,r.jsx)(e.strong,{children:"Proxy configuration enabled"}),", set your proxy URL, and validate."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Proxy settings",src:s(12981).A+"",width:"1161",height:"463"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(e.p,{children:"Optionally, to use a proxy requiring a custom Certificate Authorities:"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Store your proxy Certificate Authorities (CA), in Privacy-Enhanced Mail (PEM) format, in the ",(0,r.jsx)(e.code,{children:"proxy_ca.pem"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy the certificate to the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:'$ cat proxy_ca.pem | podman machine ssh podman-machine-default "cat > proxy_ca.pem"\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open a shell prompt on the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine ssh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Add the custom Certificate Authorities (CA) for your proxy:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ sudo cp <proxy_ca.pem> /etc/pki/ca-trust/source/anchors/\n$ sudo update-ca-trust\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(e.p,{children:"Optionally, to use a proxy in your containers:"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open a shell prompt on the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine ssh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Edit the ",(0,r.jsx)(e.code,{children:"containers.conf"})," file to pass the proxy environment variables to Podman CLI."]}),"\n",(0,r.jsx)(e.p,{children:"The file location depends on your connection mode:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootless"}),": ",(0,r.jsx)(e.code,{children:"$HOME/.config/containers/containers.conf"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootful"}),": ",(0,r.jsx)(e.code,{children:"/etc/containers/containers.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Set the proxy environment variables to pass into the containers:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-toml",children:'[containers]\nhttp_proxy = true\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Go to ",(0,r.jsx)(e.strong,{children:"Settings > Resources"})," and restart the Podman machine."]}),"\n"]}),"\n"]})}),(0,r.jsx)(l.A,{value:"mac",label:"macOS",children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["To enable proxy settings, go to ",(0,r.jsx)(e.strong,{children:"Settings > Proxy"}),", toggle on ",(0,r.jsx)(e.strong,{children:"Proxy configuration enabled"}),", set your proxy URL, and validate."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Proxy settings",src:s(12981).A+"",width:"1161",height:"463"})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(e.p,{children:"Optionally, to use a proxy requiring a custom Certificate Authorities:"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Store your proxy Certificate Authorities (CA) in Privacy-Enhanced Mail (PEM) format, in your home directory, in the ",(0,r.jsx)(e.code,{children:"proxy_ca.pem"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Copy the certificate to the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:'$ cat proxy_ca.pem | podman machine ssh podman-machine-default "cat > proxy_ca.pem"\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open a shell prompt on the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine ssh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Add the custom Certificate Authorities (CA) for your proxy:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ sudo cp <proxy_ca.pem> /etc/pki/ca-trust/source/anchors/\n$ sudo update-ca-trust\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(e.p,{children:"Optionally, to use a proxy in your containers:"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Open a shell prompt on the Podman machine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ podman machine ssh\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Edit the ",(0,r.jsx)(e.code,{children:"containers.conf"})," file to pass the proxy environment variables to Podman CLI."]}),"\n",(0,r.jsx)(e.p,{children:"The file location depends on your connection mode:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootless"}),": ",(0,r.jsx)(e.code,{children:"$HOME/.config/containers/containers.conf"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootful"}),": ",(0,r.jsx)(e.code,{children:"/etc/containers/containers.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Set the proxy environment variables to pass into the containers:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-toml",children:'[containers]\nhttp_proxy = true\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'})}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Go to ",(0,r.jsx)(e.strong,{children:"Settings > Resources"})," and restart the Podman machine."]}),"\n"]}),"\n"]})}),(0,r.jsxs)(l.A,{value:"linux",label:"Linux",children:[(0,r.jsxs)(e.p,{children:["On Linux, Podman Desktop ",(0,r.jsx)(e.strong,{children:"Proxy"})," settings have no effect on Podman."]}),(0,r.jsx)(e.p,{children:"Configure Podman."}),(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Edit the ",(0,r.jsx)(e.code,{children:"containers.conf"})," file to pass the proxy environment variables to Podman CLI."]}),"\n",(0,r.jsx)(e.p,{children:"The file location depends on your connection mode:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootless"}),": ",(0,r.jsx)(e.code,{children:"$HOME/.config/containers/containers.conf"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"rootful"}),": ",(0,r.jsx)(e.code,{children:"/etc/containers/containers.conf"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Set the proxy environment variables to pass into the Podman engine:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-toml",children:'[engine]\nenv = ["http_proxy=<your.proxy.tld:port>", "https_proxy=<your.proxy.tld:port>"]\n'})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Add the custom Certificate Authorities (CA) for your proxy:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ sudo cp <proxy_ca.pem> /etc/pki/ca-trust/source/anchors/\n$ sudo update-ca-trust\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["Restart all ",(0,r.jsx)(e.code,{children:"podman"})," processes."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell-session",children:"$ pkill podman\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(e.h4,{id:"verification-1",children:"Verification"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Podman can pull images."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Go to ",(0,r.jsx)(e.strong,{children:"Images"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Click ",(0,r.jsx)(e.strong,{children:"Pull an image"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Image to Pull"}),": Enter an image name, such as ",(0,r.jsx)(e.code,{children:"quay.io/podman/hello"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Click ",(0,r.jsx)(e.strong,{children:"Pull image"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:["Podman Desktop reports ",(0,r.jsx)(e.code,{children:"Download complete"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"You can install extensions such as:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"/docs/compose/setting-up-compose",children:"Installing Compose"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"/docs/kind/installing",children:"Installing Kind"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}function x(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},22491:(n,e,s)=>{s.d(e,{A:()=>o});s(63696);var i=s(11750);const r={tabItem:"tabItem_wHwb"};var t=s(62540);function o(n){let{children:e,hidden:s,className:o}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:s,children:e})}},78296:(n,e,s)=>{s.d(e,{A:()=>w});var i=s(63696),r=s(11750),t=s(90766),o=s(49519),l=s(14395),a=s(35043),c=s(44544),d=s(94243);function h(n){return i.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(n){const{values:e,children:s}=n;return(0,i.useMemo)((()=>{const n=e??function(n){return h(n).map((n=>{let{props:{value:e,label:s,attributes:i,default:r}}=n;return{value:e,label:s,attributes:i,default:r}}))}(s);return function(n){const e=(0,c.XI)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,s])}function p(n){let{value:e,tabValues:s}=n;return s.some((n=>n.value===e))}function x(n){let{queryString:e=!1,groupId:s}=n;const r=(0,o.W6)(),t=function(n){let{queryString:e=!1,groupId:s}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:e,groupId:s});return[(0,a.aZ)(t),(0,i.useCallback)((n=>{if(!t)return;const e=new URLSearchParams(r.location.search);e.set(t,n),r.replace({...r.location,search:e.toString()})}),[t,r])]}function m(n){const{defaultValue:e,queryString:s=!1,groupId:r}=n,t=u(n),[o,a]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:s}=n;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const i=s.find((n=>n.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:e,tabValues:t}))),[c,h]=x({queryString:s,groupId:r}),[m,j]=function(n){let{groupId:e}=n;const s=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,t]=(0,d.Dv)(s);return[r,(0,i.useCallback)((n=>{s&&t.set(n)}),[s,t])]}({groupId:r}),g=(()=>{const n=c??m;return p({value:n,tabValues:t})?n:null})();(0,l.A)((()=>{g&&a(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((n=>{if(!p({value:n,tabValues:t}))throw new Error(`Can't select invalid tab value=${n}`);a(n),h(n),j(n)}),[h,j,t]),tabValues:t}}var j=s(86681);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=s(62540);function y(n){let{className:e,block:s,selectedValue:i,selectValue:o,tabValues:l}=n;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=n=>{const e=n.currentTarget,s=a.indexOf(e),r=l[s].value;r!==i&&(c(e),o(r))},h=n=>{let e=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const s=a.indexOf(n.currentTarget)+1;e=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(n.currentTarget)-1;e=a[s]??a[a.length-1];break}}e?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},e),children:l.map((n=>{let{value:e,label:s,attributes:t}=n;return(0,f.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>a.push(n),onKeyDown:h,onClick:d,...t,className:(0,r.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":i===e}),children:s??e},e)}))})}function b(n){let{lazy:e,children:s,selectedValue:t}=n;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const n=o.find((n=>n.props.value===t));return n?(0,i.cloneElement)(n,{className:(0,r.A)("margin-top--md",n.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==t})))})}function v(n){const e=m(n);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function w(n){const e=(0,j.A)();return(0,f.jsx)(v,{...n,children:h(n.children)},String(e))}},13330:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dashboard-podman-is-running-1c39ff05daf8b1b57c773f1bc33b150b.png"},80162:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/dashboard-podman-needs-set-up-c4b3ae1664f8cd2764af6579522285f5.png"},12981:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/proxy-settings-53c0f0a2f5c6b8746f44fe8bc10fe081.png"},43023:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var i=s(63696);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);