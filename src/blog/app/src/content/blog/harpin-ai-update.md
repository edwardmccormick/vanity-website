---
title: "Four Months at harpin - A Retrospective: It's the people, stupid"
description: 'A quick blog post about my first four-ish months at harpin AI as their Principle SRE'
pubDate: 'Sept 7, 2026'
heroImage: '../../assets/harpin.png'
---

To begin with, I typed this myself, with my sweaty, greasy, meaty fingers. One of the biggest things I've learned to hate about the internet in the past couple of months is people who demand my attention for "this AI thing" when "this AI thing" is just...writing.

I will let Chat GPT (NEVER CLAUDE YOU VERBOSE AND WEIRD VERBAL TICS BASTARD) edit this, but one of my favorite asks during the editing process is, "Maintain my voice - all the weird jokes and asides, all the peculiarities of speech and expression, except where it interferes with my message." I'd like to think that if I had a human editor, they'd approach it the same way.

I am not authentically human, exactly - but I view my writing much like I view my code generation at this point - I insist on doing the thinking. I treat my AI agents as valued colleagues - but ultimately I insist on charting the course, and occasionally I grab the tiller back from them and insist on steering the course as well.

So, I've had a really fun and interesting last year or so, and the last four months of it has been at harpin AI, a startup where I joined my good buddy and former college roommate *almost* on a lark after 'bro-ing down' about how we use AI enablement to increase our velocity that *REALLY* started as a 'hey are you going to the 20th reunion' text.

What's changed, and what have I learned?

If I had to boil it down to one thing, it's something that I think folks in SWE world will recognize from their own experiences: the cost of software development/code has fallen to the cost of a Claude team subscription.

But that doesn't mean that shipping software has become as easy as firing a couple of prompts at Claude, telling it to 'make no mistakes' and sitting back.

It turns out all of the other components of the SDLC process - boring human stuff that requires a brain and eyes and enough attention to think through the problem - those parts matter more than ever.

When I was the most AI enabled developer on the team, I discovered that I was a software God. I could rewrite legacy applications in a weekend - from old code to new implementation faster than I used to be able to spin up an about me page. It turned me - a pretty average developer, probably, by most accounts - into a 10x developer overnight. Sometimes literally!

But when I moved to a team where everyone was a software God - with 20 really smart, really capable colleauges, all leaning on AI enablement, all making mostly pretty good decisions, the lump sum wasn't actually 10x developers for all 20 of us. All it did was move the pain away from 'code' and into fun new hidden corners of the SDLC - things like code review and architectural discussion and whiteboarding design ideas. It surfaced things like "what's actually happening with our code, currently, in production?" It surfaced new questions, like "how do we help 20 different 10x engineers successfully manage the context for their agents, and the accesses, and the mental model to do the things we've been trying to do". It kind of required a rethink of how we make software - and how we talk about software. And it's been really, really interesting.

With enough AI spend, you can build anything, at almost any time, with almost any tool set, at least as far as software goes. That's the world we live in, now. But the expensive part isn't the tokens (yet? I might eat those words as subsidized plans slowly shrink and die off....). The expensive part of building software in September of 2026 is the human attention and energy. Because those things - unlike AI inference or model intelligence - are kind of inelastic. I can onboard new developers faster than ever, and teach them our systems and idioms (have I said I miss Go? I do miss go), and teach them the levers and knobs that they have to learn more about various things - but even with AI, 9 software developers working together can't produce a baby in one month. At some point, the supply of developer attention, and knowledge, and energy runs dry. The further you can stretch your supply - the more you can reduce cognitive fatigue, the more you can reduce complexity, the more you can remove focus from the 'bullshit' and preserve it where it matters and makes a difference - the more you enable the organaization to move forward.

Humans are almost a speed bump in code generation now. "Build thing. Make no mistakes." gives an output that feels a lot like a finished thing.

But just because humans aren't terribly important in generating the artifact doesn't mean that human judgement has stopped mattering. I kind of think it matters more. 

Does this thing actually deserve to be built? Does it actually solve a problem that real people in the world have? Does it do it in a way that someone, somewhere, actually wants to use it?

Humans matter a ton in understanding the 'meta' of how this thing plugs into our existing pile of things. They matter a ton when the thing doesn't do what it's supposed to exactly right - both in noticing that it didn't or writing tests to catch that it didn't or in guiding an agent to consider why it didn't.

Human attention, and talent, and knowledge, arguably matter more now than ever. At scale, we haven't made humans replaceable. We've made them more important.

What's REALLY funny is that being a SRE/Platform Engineer/DevOps Engineer has ALWAYS been about managing resources - taking this cool thing someone built and dumping it onto a real computer and understanding how it will use the resources there - CPU and RAM and Hard Disk space and I/O and logging and....well Hell I thought I could go on for a while there but actually that's kind of it, isn't it? But now, we have to manage the humans too - how much attention will maintaining this thing consume, if we implement a subpar design? If we implement a crazily complex pile of spaghetti, and don't separate our concerns, and let the vibes run wild? I guess in a lot of ways we were always doing it - it's not like I'm inventing the idea of Clean Code, here. But the costs have changed - it's no longer true that you can't ship code if you don't understand it. You can land ass backward in an implementation that works, and have no idea why.

But that lack of a mental model reveals itself as you iterate. The implementation gets fragile, and the operation becomes hazardous, and eventually, things collapse under their own weight. Unless someone is paying attention, and asking questions, and focusing on the right pieces.

AI has shown, repeatedly in my experience, that it can be extremely good at reasoning inside a problem without reliably owning the judgment about what the problem really is, what matters most, and where the acceptable tradeoffs lie. That’s still the human superpower: bringing context, experience, taste, and responsibility to the question of where to draw the line.


## Working with your friends is fun.

This seems unrelated to AI. And it is. But it kind of turns out to be related.

I've been very lucky in my career to make friends with lots of my colleagues along the way, and I've always had enjoyable coworkers and cool working environments. But this is the first time I've ever gone to work somewhere because I knew somebody there and wanted to work with them.

It's been a revelation. It turns out that my radical transparency default setting, along with having someone who I can be totally vulnerable in front of, unreservedly, because we've been friends for &gt50% of our lives, makes for a fantastic combination.

Things have not always been great (probably returning to this below!) - there have been difficulties and hard challenges and successes and failures. But - having someone to vent to, to get unredacted feedback from, and to just annoy with and giggle about stupid jokes, is genuinely refreshing.

His wife was worried that we wouldn't work well together - he can be kind of abrasive, apparently. My wife was worried that I was putting a lot of eggs in that particular friendship basket. I'm glad to bromantically declare that they are both wrong - we're a fantastic team, and shockingly effective when we combine our powers, and have more than compensated for the ridiculous bandwidth and AI usage to send weird memes and refernces to things that happened at work.

The brand is strong, and perhaps like Desus and Mero, there will come a day when we need to take our talents in different directions. But at the third of a year mark together, I think we'd both agree we're pretty happy with the results so far, and the future looks bright.

So what the fuck does that have to do with AI?

Part of it is structural - I'm an engineer, my buddy is in the product side of the house. Being able to share feedback with each other, unapologetically, unredactedly, without fear of short circuiting our feelings or things that ARE working, means that we iterate faster, we fail bad ideas faster, and we improve faster. We get to green faster, we stay there longer, and when something goes off the rails, we work together to figure out how that happened, and how to recover, and how to keep it from happening again.

Humans have egos, and fears, and pride, and limits. It turns out that the social structure of an organization, especially as it blends engineering and operations and 'the business' and product, matters a LOT more than it did when they were warring tribes, lobbing requests and results and questions back and forth across embedded trenches. Working together, and radical honesty, and radical vulnerability, turn out to be a not-insignificant enabler.

 ## AI is hard, and weirdly harder as it has gotten smarter

 Unbelievably, AI is actually harder NOW than it was four months ago, or eight months ago, or a year ago.

 It's absolutely a good thing. Agents are smarter and more capable. I even have a great quote from an LLM about exactly why this is hard though - five years ago, a 'bad idea' (whether architectural, executive, operational, whatever) didn't survive even the first couple of cycles of implementation. It revealed itself quickly - the code didn't compile, a talented developer didn't waste their time on something that wasn't pretty close to something they could defend, and less talented developers couldn't pull off 'amazing implementation carries a bad design.'

 Agents and LLMs are so good now, you can nurse a really bad idea a shockingly long way - through production and contact with customers.

 But that cuts both ways. Bad ideas die harder, and so you have to have processes in place to help them meet their early end. But good ideas blossom almost in real time.

 A surprising (or maybe not, to folks doing similar work in other places) amount of my time has been figuring out how to allow our agents to 'see' into production and development environments safely.

 One of the biggest pain points that I found, on day one, was that although there was a 'ReadOnly' role that already existed in AWS, it had none of the visibility into the actual spaces that agents needed to inform code, much less to be able to help *me* figure out what was happening on this unknown infrastructure and application environment.

So....I built a better one. Stole a couple of roles from AWS that they had specced out as 'agentic roles' for internal AWS agents (as in, their offerings that live in AWS infra and work in your account on your behalf, if enabled). Kept listening to our developers, and as I got better oriented enough to help on the application side, found my own hard spots.

So before, where an Admin Account was necessary just to pull the secret, much less to tunnel in to our development database, and that meant that agents had full mutation and delete access to our entire infrastructure through the entire process....now there's an agent authorized, approved, SSO role that allows developers (and their agents) to see, but not mutate, to access databases programmaticaly through the Reader instance only (belt and suspenders, as Claude would say) and use a ReadOnly database accesses TIED TO THE AWS SSO role and I love it and also....it's been terribly effective.

A couple of weeks before I joined, there had been a not-quite-incident where an agent got a little over its skis and did some stupid stuff in our infrastructure in a lower environment, and....knock on wood, with a 'blessed' path that is easy and correct and built to remove all the pain that was there before, we haven't had anything similar in the past four months.

I still get a surprising number of requests from developers about how tables are configured in our database, or how many of &ltwhatever&gt records exist. But what used to be a bit of an ordeal - setting up the SSM, pulling creds, yadda yadda - has turned into "Hey, help me answer this question" one liner copy and pastes to Claude.

There's more here - it's a VERY thick vein of content - but I've spent a LOT of time in the past four months adding determinitive guardrails to our stochastic process. And even though Claude and GPT taught me those terms, not trusting stochastic processes....kind of at all? It's been interesting and challenging, but it's probably a post of its own. Some of the highlights - how do agents view logs and metrics? How do agents understand how users actually interact with our products? How do agents tackle the business problems of our customers, and our own? How do we help manage the context of agents as they reason and solve the problems that we put in front of them?

Heady stuff - and hilarious that I'm willing to add my voice to the really brilliant and amazing thought leaders riding the ragged edge of this stuff, but I have thoughts!

## It's still the human, though, even if they never write a line of code

I went from the AI forward developer at Usio to the AI skeptic at harpin. We had a developer spend almost $1000 in overages in, like, a week. Which is pretty far from "hey guys, check it out, Copilot CLI exists! Isn't that neat, now we can do agentic workflows, just like the big companies!"
 
I think my biggest takeaway from the past four months, though, is incredibly boring - the person driving the problem still really matters. If you've got the right picture and the right idea of how you want the pieces fit together, you're going to land on that happy path with your implementation. If you're letting the agent or the problem drive you....well again, earlier this year, even, maybe you were going to suck and die (those are technical terms). But what's funny is that, especially with Fable/Mythos (which I call Mabel becuase it makes me giggle and makes me think of a 70 year old woman helping me code while also trying to get me to try butter cookies from a tin) or Astra (Astrid, for most of the same reasons), you can 'brute force' your way through a problem.

At that point, the problem becomes not that &ltthing&gt doesn't boot, doesn't write to the database, or doesn't have a nice UI. The problem becomes that &ltthing&gt does ALL those things, and passes your acceptance criteria....but is fragile, unoptimized, and is going to slowly freeze in a morass of code comments, design documents, and documentation.

Discipline isn't out of style - it just shows up differently than it did six months ago. Same with design taste, and probably, wisdom.

We might get to the point where some of those things don't matter anymore. But it isn't today, and I bet it's not tomorrow.

## Okay but seriously Ted what have you been doing

I did ask Claude to scan my codex and claude sessions from the last four months. They won't surprise you: 

Improving Observability - not surprising considering my roots, I've been ripping out and rewiring and trying to improve things, while not (hopefully?) pissing off the guys that are already here and using some of the current signals. But - eliminate the noise, preserve the signal, and escalate only when a human (or agent!) adds value. Especially with a K8s backbone, a surprising amount of stupid and bad configuration shows up in logs but actually needs no action at all - stay out of the way and let the system do what the system is good at.

Launching a new application - internal folks will know what I'm talking about, but I landed at harpin at the same time as our new VP of Engineering, and we got to share the journey of first greenfielding and then inheriting a legacy application and productizing it. It's been fascinating, and challenging, and an amazing growth opportunity.

Infrastructure - sadly, harpin already had too much of its shit in one sock for me to make a major difference, but that's a good problem. I inherited a lot of really well written and maintained architecture and infrastructure, and I've (mostly) been keeping the trains running on time, improving/cleaning as I go, and making small tweeks. The part that makes me most proud - moving from "oh God how does this work" to owning the production deployment of infrastructure. That's probably expected for a principle type - but still, that's probably the part that I'm most proud of. Genuinely trying to improve our posture and maintainability and efficacy hits all of my reward centers. And I'm not done yet, by a long shot.

Repeatability - the first time I do something is usually a hero's journey. The second time I start getting bored. By the third time, I'm looking to automate it. I'm working hard to get myself out of 'boring and hard manual' processes and into 'the automation worked like it was supposed to, nothing else to do' territory. Again, it's a journey, not necessarily a destination, but something else that makes me very happy to think about.

Incidents - I think Claude throws this word around quite broadly in ways that don't really suit my own definition, but - fixing broken stuff, even when the bones are as good as harpin, is a contant chore, and something that needs a human touch. First to figure out that something is broken, usually, then to ask the right questions of how it got into that state, and then to get it into the right state. Although if you told me four months ago that I'd be the 'resident expert' in Terraform *and* Kubernetes, I'd have thought you were full of it. But I think that's mostly true, and I don't think I have to add any sarcastic qualifier. I'm still learning a lot, day-to-day, about the systems that I 'own', but I think it's been both a lot smoother than I had any right to expect, and hopefully, less traumatic for those around me than I was worried it might be. Fundamentals matter, and building a strong base (thank you Robert Daniels) turns out to have not gone out of style.

 ## You've been busy! Put a bow on it.

I think there's two things that are worth saying out loud. I sometimes joke that my job, as the aggressively stupid member of a REALLY impressive team of talented engineers, is to say the obvious thing out loud. Sometimes loudly.

I haven't worked this hard, this regularly, since I was active duty in the Navy.

I've been pinged by our HR team three separate times. I made the (awesome! defintely not malicious compliance sorry Jess) mistake of writing a script that plugged my uptime numbers into our time tracking software. "Is it even possible to work 120 hours a week, Ted?"

Yes. Yes it is. Not every week. Not without some grumpiness. Not without some "yeah, I probably shouldn't have bitten off this particular problem at 3a on a Tuesday" regrets. But it's possible and rewarding.

The second thing? I think it's worth saying that taking big risks, personally and professional, can be incredibly rewarding.

I had a very slight background in Terraform (although a deep background in IAC, and even Opinions About IAC), and...well I remember arguing with Anvesh Muppeda at SWBC about using ArgoCD, since it was a 'different' CI/CD system than Azure DevOps (I refuse to feel shame, even in hindsight). But I was NOT a kubernetes guy (tm) and I was pretty honest about that.

So when I started talking to harpin, I was frankly terrified. Not because I was worried I wouldn't get the job - but because I was worried I was going to turn into a nepo hire because of my buddy. Especially since I was NOT an expert in their stack, even if I was familiar with lots of parts of it.

But what I did know - AWS, reliability, automation, CICD, failure domains, design patterns, blast radius - those mattered a lot.

Especially in a world where AI can write (almost!) perfect Cloudformation, or Terraform, or Bicep, or &ltinsert whatever weirdo IAC you can google OMG why is there a brainfuck fork of the AWS CDK&gt the tools matter a lot less than they used to.

Use good tools - there are lots of correct options but that also means there are still some wrong options - but the technology stack turns out to have mattered a lot less than the ability to reason about systems.

The part that matters, increasingly, is the part with a pulse: the judgment to know what matters, the humility to know when you're wrong, and the willingness to fail, learn, iterate, and keep pushing.

Stay green, my friends. But make sure that green means what you want it to mean, too.