(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(e,a,t){"use strict";t.r(a);var i=t(0),r=Object(i.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h4",{attrs:{id:"zabbix-support-multi-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zabbix-support-multi-language","aria-hidden":"true"}},[e._v("#")]),e._v(" Zabbix support multi-language?")]),e._v(" "),t("p",[e._v("Yes")]),e._v(" "),t("h4",{attrs:{id:"what-is-the-default-character-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-default-character-set","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the default character set?")]),e._v(" "),t("p",[e._v("UTF-8")]),e._v(" "),t("h4",{attrs:{id:"is-zabbix-proxy-included-in-this-deployment-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-zabbix-proxy-included-in-this-deployment-solution","aria-hidden":"true"}},[e._v("#")]),e._v(" Is Zabbix-Proxy included in this deployment solution?")]),e._v(" "),t("p",[e._v("No, Zabbix proxy is a process that may collect monitoring data from one or more monitored devices and send the information to the Zabbix server, deploying a proxy is optional, but may be very beneficial to distribute the load of a single Zabbix server. If only proxies collect data, processing on the server becomes less CPU and disk I/O hungry.")]),e._v(" "),t("h4",{attrs:{id:"what-s-zabbix-sender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-zabbix-sender","aria-hidden":"true"}},[e._v("#")]),e._v(" What's Zabbix-Sender?")]),e._v(" "),t("p",[e._v("Zabbix sender is a command line utility that may be used to send performance data to Zabbix server for processing.")]),e._v(" "),t("h4",{attrs:{id:"what-s-zabbix-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-zabbix-git","aria-hidden":"true"}},[e._v("#")]),e._v(" What's Zabbix-Git?")]),e._v(" "),t("p",[e._v("Zabbix get is a command line utility which can be used to communicate with Zabbix agent and retrieve required information from the agent.")]),e._v(" "),t("h4",{attrs:{id:"can-i-use-the-rds-of-cloud-provider-for-zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-the-rds-of-cloud-provider-for-zabbix","aria-hidden":"true"}},[e._v("#")]),e._v(" Can I use the RDS of Cloud Provider for Zabbix?")]),e._v(" "),t("p",[e._v("No")]),e._v(" "),t("h4",{attrs:{id:"where-is-the-database-connection-configuration-of-zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-is-the-database-connection-configuration-of-zabbix","aria-hidden":"true"}},[e._v("#")]),e._v(" Where is the database connection configuration of Zabbix?")]),e._v(" "),t("p",[e._v("Database configuration information in "),t("em",[e._v("LocalSettings.php")]),e._v(" in the "),t("router-link",{attrs:{to:"/stack-components.html#zabbix"}},[e._v("Zabbix installation directory")])],1),e._v(" "),t("h4",{attrs:{id:"if-there-is-no-domain-name-can-i-deploy-zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#if-there-is-no-domain-name-can-i-deploy-zabbix","aria-hidden":"true"}},[e._v("#")]),e._v(" If there is no domain name, can I deploy Zabbix?")]),e._v(" "),t("p",[e._v("Yes, visit Zabbix by "),t("em",[e._v("http://Internet IP")])]),e._v(" "),t("h4",{attrs:{id:"what-is-the-password-for-the-database-root-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-password-for-the-database-root-user","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the password for the database root user?")]),e._v(" "),t("p",[e._v("The password is stored in the server related file: "),t("code",[e._v("/credentials/password.txt")])]),e._v(" "),t("h4",{attrs:{id:"is-it-possible-to-modify-the-source-path-of-zabbix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-it-possible-to-modify-the-source-path-of-zabbix","aria-hidden":"true"}},[e._v("#")]),e._v(" Is it possible to modify the source path of Zabbix?")]),e._v(" "),t("p",[e._v("No")]),e._v(" "),t("h4",{attrs:{id:"can-i-configure-this-zabbix-if-i-don-t-understand-the-linux-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-configure-this-zabbix-if-i-don-t-understand-the-linux-command","aria-hidden":"true"}},[e._v("#")]),e._v(" Can I configure this Zabbix if I don't understand the Linux command?")]),e._v(" "),t("p",[e._v("Yes, you can use GUI tool WinSCP to start Zabbix, no commands")]),e._v(" "),t("h4",{attrs:{id:"how-to-change-the-permissions-of-filesytem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-permissions-of-filesytem","aria-hidden":"true"}},[e._v("#")]),e._v(" How to change the permissions of filesytem?")]),e._v(" "),t("p",[e._v("Change owner(group) or permissions like below:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n#e.g. user is apache\nchown -R apache.apache /data/wwwroot\n\n#e.g. user is nginx\nchown -R nginx.nginx /data/wwwroot\n\n#modify the read/modify/excuse permissions\n\nfind /data/wwwroot -type d -exec chmod 750 {} \\;\nfind /data/wwwroot -type f -exec chmod 640 {} \\;\n")])])]),t("h4",{attrs:{id:"what-s-the-difference-between-deployment-and-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-difference-between-deployment-and-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" What's the difference between Deployment and Installation?")]),e._v(" "),t("ul",[t("li",[e._v("Deployment is a process of installing and configuring a sequence of software in sequence in a different order, which is a complex system engineering.")]),e._v(" "),t("li",[e._v("Installation is the process of starting the initial wizard after the application is prepared.")]),e._v(" "),t("li",[e._v("Installation is simpler than deployment.")])]),e._v(" "),t("h4",{attrs:{id:"what-s-cloud-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-cloud-platform","aria-hidden":"true"}},[e._v("#")]),e._v(" What's Cloud Platform?")]),e._v(" "),t("p",[e._v("Cloud platform refers to platform manufacturers that provide cloud computing services, such as: "),t("strong",[e._v("Azure, AWS, Alibaba Cloud, HUAWEI CLOUD, Tencent Cloud")]),e._v(", etc.")]),e._v(" "),t("h4",{attrs:{id:"what-is-the-difference-between-instance-cloud-server-virtual-machine-ecs-ec2-cvm-and-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-instance-cloud-server-virtual-machine-ecs-ec2-cvm-and-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the difference between Instance, Cloud Server, Virtual Machine, ECS, EC2, CVM, and VM?")]),e._v(" "),t("p",[e._v("No difference, just the terminology used by different manufacturers, actually cloud servers")])])},[],!1,null,null,null);a.default=r.exports}}]);