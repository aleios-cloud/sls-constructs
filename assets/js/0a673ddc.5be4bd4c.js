"use strict";(self.webpackChunk_sls_constructs_docs=self.webpackChunk_sls_constructs_docs||[]).push([[235],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(1163),a=(r(9496),r(9613));const o={sidebar_position:3},i="Lambda",s={unversionedId:"Lambda",id:"Lambda",title:"Lambda",description:"The AleiosLambda construct extends the NodejsFunction construct: A Node.js Lambda function bundled using esbuild. See the CDK docs here for more info.",source:"@site/docs/Lambda.md",sourceDirName:".",slug:"/Lambda",permalink:"/sls-constructs/docs/Lambda",draft:!1,editUrl:"https://github.com/aleios-cloud/sls-constructs/tree/main/docs/Lambda.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"What is this?",permalink:"/sls-constructs/docs/intro"}},l={},u=[{value:"Example Usage",id:"example-usage",level:2},{value:"Initialiser",id:"initialiser",level:2},{value:"Best Practise",id:"best-practise",level:2},{value:"Required Props",id:"required-props",level:2},{value:"Function Name",id:"function-name",level:3},{value:"Entry",id:"entry",level:3},{value:"Prop Defaults",id:"prop-defaults",level:2},{value:"Runtime",id:"runtime",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Tracing",id:"tracing",level:3},{value:"Memory Size",id:"memory-size",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Retry Attempts",id:"retry-attempts",level:3},{value:"Dead Letter Queue",id:"dead-letter-queue",level:3},{value:"Other Props",id:"other-props",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lambda"},"Lambda"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"AleiosLambda")," construct extends the ",(0,a.kt)("inlineCode",{parentName:"p"},"NodejsFunction")," construct: A Node.js Lambda function bundled using esbuild. See the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-lambda-nodejs.NodejsFunction.html"},"CDK docs here for more info"),"."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new AleiosLambda(this, 'HelloWorldLambda', {\n  functionName: 'hello-world',\n  entry: join(__dirname, 'handler.ts'),\n});\n")),(0,a.kt)("h2",{id:"initialiser"},"Initialiser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new AleiosLambda(scope: Construct, id: string, props?: NodejsFunctionProps)\n")),(0,a.kt)("h2",{id:"best-practise"},"Best Practise"),(0,a.kt)("p",null,"You can find a full list of the best practise checks in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html"},"AWS docs here"),"."),(0,a.kt)("h2",{id:"required-props"},"Required Props"),(0,a.kt)("h3",{id:"function-name"},"Function Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"functionName: string")),(0,a.kt)("p",null,"The name of the Lambda function. The name must be unique within the region and account. The maximum length is 64 characters. The regex pattern used is ","[a-zA-Z0-9-_]","+. This name helps identify the function later."),(0,a.kt)("h3",{id:"entry"},"Entry"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"entry: string")),(0,a.kt)("p",null,"The path to the entry file (JavaScript or TypeScript) that defines the function handler and other helper code. The path should be relative to the root directory (where the cdk.json file is). The entry file must export a function called handler by default. The name of the exported function can be modified with the ",(0,a.kt)("inlineCode",{parentName:"p"},"handler")," prop."),(0,a.kt)("h2",{id:"prop-defaults"},"Prop Defaults"),(0,a.kt)("h3",{id:"runtime"},"Runtime"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Runtime.NODEJS_18_X")),(0,a.kt)("p",null,"Use the latest supported version of Nodejs to insure best performance and security. Also this version of Nodejs for Lambda comes bundled with the v3 SDK for Javascript which has notable performance improvements over the v2 SDK. You can read about AWS Lambda runtimes ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/runtimes-functions.html"},"here"),". Note this construct is only applicable for Nodejs runtimes."),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Architecture.ARM_64")),(0,a.kt)("p",null,"AWS Lambda now supports ARM-based architecture, which provides better cost efficiency and performance compared to x86-based architecture. Use the ARM_64 architecture for your Lambda functions to take advantage of these benefits. Only use the X86_64 architecture if you need to use a native module that is not supported by the ARM_64 architecture."),(0,a.kt)("h3",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tracing.ACTIVE")),(0,a.kt)("p",null,"Enable active tracing for your ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/trace-requests.html"},"Lambda functions using AWS X-Ray"),". This provides valuable insights into your function's performance, helping you identify bottlenecks and improve your application's overall efficiency."),(0,a.kt)("h3",{id:"memory-size"},"Memory Size"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"memorySize: 1024")),(0,a.kt)("p",null,"Select an appropriate memory size for your Lambda function based on its requirements. Remember that memory size is directly related to CPU speed. Choose a higher memory size for compute-intensive tasks or to reduce execution time. Keep in mind that costs will increase with higher memory allocations. You can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/operatorguide/profile-functions.html"},"Lambda Power Tuning")," to help you determine the optimal memory size for your function."),(0,a.kt)("h3",{id:"timeout"},"Timeout"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Duration.seconds(20)")),(0,a.kt)("p",null,"Set a reasonable timeout for your Lambda functions based on their expected execution time. Be careful not to set a timeout that is too low, as this may cause your function to terminate prematurely. Conversely, a timeout that is too high may result in unnecessary costs if your code behaves incorrectly."),(0,a.kt)("h3",{id:"retry-attempts"},"Retry Attempts"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"retryAttempts: 2")),(0,a.kt)("p",null,"Configure the number of retry attempts for your Lambda functions. AWS Lambda automatically retries failed executions, but you should set a limit to avoid excessive retries and associated costs. Determine the appropriate number of retries based on your use case and the likelihood of transient errors."),(0,a.kt)("h3",{id:"dead-letter-queue"},"Dead Letter Queue"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"deadLetterQueueEnabled: true")),(0,a.kt)("p",null,"Enable a Dead Letter Queue (DLQ) for your Lambda functions to capture and store unprocessed events when all retries have been exhausted. This allows you to identify and diagnose failures and either reprocess or archive the failed events. Integrating a DLQ with your Lambda function ensures better visibility into your application's health and resilience."),(0,a.kt)("h2",{id:"other-props"},"Other Props"),(0,a.kt)("p",null,"You can find the full list of props for the underlying ",(0,a.kt)("inlineCode",{parentName:"p"},"NodejsFunction")," construct and their defaults in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs.NodejsFunction.html#construct-props"},"CDK docs here"),"."))}p.isMDXComponent=!0}}]);