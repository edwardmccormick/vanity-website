##This is a static HTML website designed to be hosted on a cloud service.

The static-website-cloudformation.yaml file contains a cloudformation template that will deploy all the infrastructure for this site to be fully functional.

The GitHub Actions pipeline.yaml file, if you populate all the appropriate secrets for your AWS account and for some  assets and such, *should* deploy the content here to the infrastructure created by the cloudformation. If you'd rather not, though, it's fairly trivial with the assets created above to drag and drop into the S3 bucket. Not the most elegant solution, but you could do it.

I recently flipped the styling (such as it is! I have the design eye for Front End of a DevOps engineer!) from Bootstrap, which I enjoy but is kind of heavy, to TailwindCSS. There are a lot fewer copy/paste components ready to roll out of the box, but it's blasted fast (even before minifying).

It's so fast that I haven't bothered to minify my production CSS - without engineering an environment to test in, it wasn't really worth it to flip over the css stylesheets on each html page. Ymmv. The difference is about 30kb - which is wild. But the production css file (build.css) is there if you'd like to.

TODOs:
- [x] The cards on the home page should flip and reveal some text to help understand my background.
- [ ] Need to figure out how to automatically 'test' static web pages. Selenium?
- [ ] Need to figure out how to properly package these lambdas
- [ ] Need to get the whole darn thing to 
- [ ] I need to create an API gateway fronting a lambda to allow the contact-me page to send an email through Simple-Email-Service. Neither the infrastructure nor the functionality are ready yet.
- [x] I'd like to integrate all of the above CI/CD wise.
- [ ] Eventually I'm going to Blue/Green this pipeline, not because zero downtime deployments being that important to my vanity site, but more because I want to show what it looks like. 😀
- [x] I really like the navbar (does this look familiar: https://tailwindui.com/components/application-ui/navigation/navbars) but there's some spit and polish there that should be done. Mostly improving the CSS fit and finish.

[![Test and Deploy Pipeline](https://github.com/edwardmccormick/vanity-website/actions/workflows/pipeline.yaml/badge.svg)](https://github.com/edwardmccormick/vanity-website/actions/workflows/pipeline.yaml)
[![pages-build-deployment](https://github.com/edwardmccormick/vanity-website/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/edwardmccormick/vanity-website/actions/workflows/pages/pages-build-deployment)