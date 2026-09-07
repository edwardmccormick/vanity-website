---

title: "Four Months at harpin - A Retrospective: It''s the people, stupid"
description: 'A quick blog post about my first four-ish months at harpin AI as their Principal SRE'
pubDate: 'Sept 7, 2026'
heroImage: '../../assets/harpin.png'
-------------------------------------------

To begin with, I typed this myself, with my sweaty, greasy, meat fingers. One of the biggest things I've learned to hate about the internet in the past couple of months is people who demand my attention for "this AI thing" when "this AI thing" is just...writing.

I will let ChatGPT (NEVER CLAUDE YOU VERBOSE AND WEIRD VERBAL TICS BASTARD) edit this, but one of my favorite asks during the editing process is, "Maintain my voice - all the weird jokes and asides, all the peculiarities of speech and expression, except where it interferes with my message." I'd like to think that if I had a human editor, they'd approach it the same way.

I am not authentically human, exactly, but I view my writing much like I view my code generation at this point: I insist on doing the thinking. I treat my AI agents as valued colleagues, but ultimately I insist on charting the course, and occasionally I grab the tiller back from them and insist on steering as well.

So, I've had a really fun and interesting last year or so, and the last four months of it have been at harpin AI, a startup where I joined my good buddy and former college roommate *almost* on a lark after 'bro-ing down' about how we use AI enablement to increase our velocity. That conversation *REALLY* started as a "hey are you going to the 20th reunion" text.

What's changed, and what have I learned?

If I had to boil it down to one thing, it's something that I think folks in SWE world will recognize from their own experiences: the cost of producing code has fallen to something remarkably close to the cost of a Claude team subscription.

But that doesn't mean that shipping software has become as easy as firing a couple of prompts at Claude, telling it to "make no mistakes," and sitting back.

It turns out all of the other components of the SDLC process, boring human stuff that requires a brain and eyes and enough attention to think through the problem, matter more, not less.

When I was the most AI-enabled developer on the team, I discovered that I was a software God. I could rewrite legacy applications in a weekend, from old code to new implementation faster than I used to be able to spin up an About Me page. It turned me, a pretty average developer probably, by most accounts, into a 10x developer overnight. Sometimes literally!

But then I moved to a team where everyone was a software God, with 20 really smart, really capable colleagues all leaning on AI enablement and all making mostly pretty good decisions, and the lump sum wasn't actually twenty 10x developers.

All it did was move the pain.

It moved away from "code" and into fun new hidden corners of the SDLC: code review and architectural discussion and whiteboarding design ideas. It surfaced questions like "what's actually happening with our code, currently, in production?" It surfaced new ones, like "how do we help 20 different 10x engineers successfully manage the context for their agents, and their accesses, and the mental model they need to do the things we've been trying to do?"

It kind of required a rethink of how we make software, and how we talk about software. And it's been really, really interesting.

With enough AI spend, you can build almost anything, at almost any time, with almost any tool set, at least as far as software goes. That's the world we live in now. But the expensive part isn't the tokens. Yet. I might eat those words as subsidized plans slowly shrink and die off.

The expensive part of building software in September of 2026 is human attention and energy.

Those things, unlike AI inference or model intelligence, are kind of inelastic. I can onboard developers faster than ever, teach them our systems and idioms (have I said I miss Go? I do miss Go), and give them the levers and knobs they need to learn more about whatever is in front of them. But even with AI, nine software developers working together can't produce a baby in one month.

At some point, the supply of developer attention and knowledge and energy runs dry. The further you can stretch that supply, the more you can reduce cognitive fatigue, reduce complexity, remove focus from the bullshit and preserve it where it actually matters, the more you enable the organization to move forward.

Humans are almost a speed bump in code generation now. "Build thing. Make no mistakes." gives an output that feels a lot like a finished thing.

But just because humans aren't terribly important in generating the artifact doesn't mean that human judgment has stopped mattering. I kind of think the opposite has happened.

Does this thing actually deserve to be built? Does it solve a problem that real people in the world have? Does it do it in a way that someone, somewhere, actually wants to use?

Humans matter a ton in understanding the "meta" of how this thing plugs into our existing pile of things. They matter when the thing doesn't do what it's supposed to exactly right, whether that's noticing that it didn't, writing tests to catch that it didn't, or guiding an agent toward understanding why it didn't.

We've made a bunch of human labor cheaper. We haven't done the same thing to human judgment.

And that's where, as an SRE, this gets really funny.

Being a SRE/Platform Engineer/DevOps Engineer has ALWAYS been about managing resources, taking this cool thing someone built and dumping it onto a real computer and understanding how it will use the resources there: CPU and RAM and Hard Disk space and I/O and logging and....

Well hell, I thought I could go on for a while there, but actually that's kind of it, isn't it?

But now we have to manage the humans too. How much attention will maintaining this thing consume if we implement a subpar design? What happens if we build a crazily complex pile of spaghetti, don't separate our concerns, and let the vibes run wild? How much context does the next developer have to load into their brain just to safely touch it?

I guess in a lot of ways we were always doing this. It's not like I'm inventing the idea of Clean Code here. But the costs have changed.

It's no longer true that you can't ship code if you don't understand it. You can land ass-backward in an implementation that works and have absolutely no idea why.

That lack of a mental model reveals itself as you iterate. The implementation gets fragile, the operation becomes hazardous, and eventually things collapse under their own weight unless someone is paying attention, asking questions, and focusing on the right pieces.

AI has shown, repeatedly in my experience, that it can be extremely good at reasoning *inside* a problem without reliably owning the judgment about what the problem really is, what matters most, and where the acceptable tradeoffs lie.

That's still the human superpower: bringing context, experience, taste, and responsibility to the question of where to draw the line.

## Working with your friends is fun.

This seems unrelated to AI. And it is. But it kind of turns out to be related.

I've been very lucky in my career to make friends with lots of my colleagues along the way, and I've always had enjoyable coworkers and cool working environments. But this is the first time I've ever gone to work somewhere because I knew somebody there and wanted to work with them.

It's been a revelation. It turns out that my radical-transparency default setting, combined with having someone I can be totally vulnerable in front of, unreservedly, because we've been friends for >50% of our lives, makes for a fantastic combination.

Things have not always been great. There have been difficult problems, hard challenges, successes and failures. But having someone to vent to, get unredacted feedback from, and just annoy and giggle about stupid jokes with is genuinely refreshing.

His wife was worried that we wouldn't work well together because he can be kind of abrasive, apparently. My wife was worried that I was putting a lot of eggs in that particular friendship basket. I'm glad to bromantically declare that they were both wrong.

We're a fantastic team, and shockingly effective when we combine our powers, and have more than compensated for the ridiculous bandwidth and AI usage consumed sending weird memes and references to things that happened at work.

The brand is strong, and perhaps, like Desus and Mero, there will come a day when we need to take our talents in different directions. But at the third-of-a-year mark together, I think we'd both agree we're pretty happy with the results so far, and the future looks bright.

So what the fuck does that have to do with AI?

Part of it is structural. I'm an engineer, my buddy is on the product side of the house. Being able to share feedback with each other unapologetically and unredactedly, without fear of short-circuiting our feelings or the things that *ARE* working, means we iterate faster, fail bad ideas faster, and improve faster. We get to green faster, stay there longer, and when something goes off the rails, we work together to figure out how that happened, how to recover, and how to keep it from happening again.

When implementation gets cheap, coordination gets expensive.

Humans have egos, and fears, and pride, and limits. It turns out that the social structure of an organization, especially as it blends engineering and operations and "the business" and product, matters a LOT when you aren't warring tribes lobbing requests and results and questions back and forth across embedded trenches.

Working together, radical honesty, and radical vulnerability turn out to be a not-insignificant enabler.

## AI is hard, and weirdly harder as it has gotten smarter

Unbelievably, AI is actually harder NOW than it was four months ago, or eight months ago, or a year ago.

It's absolutely a good thing. Agents are smarter and more capable. But five years ago, a bad idea, whether architectural, executive, operational, whatever, often didn't survive even the first couple cycles of implementation. It revealed itself quickly. The code didn't compile. A talented developer didn't waste their time implementing something they couldn't defend. A less-talented developer couldn't pull off "amazing implementation carries a bad design."

Agents and LLMs are so good now that you can nurse a really bad idea a shockingly long way, all the way through production and into contact with customers.

Bad ideas die harder now, and so you have to build processes that help them meet an early end. But that cuts both ways: good ideas blossom almost in real time.

Increasingly, the scary part isn't that AI fails too much. It's that it can succeed locally while you're failing systemically.

The thing boots. It writes to the database. It has a nice UI. It passes your acceptance criteria. And it can still be the wrong thing.

A surprising (or maybe not, to folks doing similar work in other places) amount of my time has been figuring out how to allow our agents to "see" into production and development environments safely.

One of the biggest pain points I found on day one was that although a "ReadOnly" role already existed in AWS, it had none of the visibility into the actual spaces agents needed to inform code, much less to help *me* figure out what was happening in this completely unknown infrastructure and application environment.

So....I built a better one.

I stole a couple of ideas from roles AWS had specced out for its own agentic offerings. I kept listening to our developers, and as I got oriented enough to help on the application side, I found my own hard spots too.

Before, getting enough visibility to answer some basic development questions could require privileges wildly disproportionate to the question being asked. Now there's an approved, SSO-backed agent role that allows developers (and their agents) to see but not mutate. They can access databases programmatically through the Reader instance only (belt and suspenders, as Claude would say), with ReadOnly database access tied back to the AWS SSO role.

I love it and also....it's been terribly effective.

A couple of weeks before I joined, there had been a not-quite-incident where an agent got a little over its skis and did some stupid stuff in a lower environment. Knock on wood, with a "blessed" path that's easy and correct and intentionally removes the pain that existed before, we haven't had anything similar in the past four months.

I still get a surprising number of requests from developers about how tables are configured in our database, or how many of <whatever> records exist. But what used to be a bit of an ordeal, setting up SSM, pulling creds, yadda yadda, has turned into a one-line copy/paste to Claude: "Hey, help me answer this question."

That's kind of the point. I didn't make Claude smarter. I made the safe, useful path easier.

There's more here. It's a VERY thick vein of content, but I've spent a LOT of time in the past four months adding deterministic guardrails to our stochastic processes. And even though Claude and GPT taught me those terms, not trusting stochastic processes....kind of at all? That part feels pretty natural.

How do agents view logs and metrics? How do agents understand how users actually interact with our products? How do agents tackle the business problems of our customers, and our own? How do we help manage the context of agents as they reason through the problems we put in front of them?

Heady stuff, and hilarious that I'm willing to add my voice to the really brilliant and amazing thought leaders riding the ragged edge of this stuff, but I have thoughts!

I went from the AI-forward developer at Usio to something much closer to the AI skeptic at harpin. We had a developer spend almost $1000 in overages in, like, a week, which is pretty far from "hey guys, check it out, Copilot CLI exists! Isn't that neat, now we can do agentic workflows, just like the big companies!"

And I think my biggest takeaway from the past four months is incredibly boring: the person driving the problem still really matters.

If you've got the right picture and the right idea of how you want the pieces to fit together, you're probably going to land somewhere near a happy path with your implementation. If you're letting the agent, or the problem itself, drive you, well, earlier this year maybe you were just going to suck and die (those are technical terms).

But what's funny is that, especially with Fable/Mythos (which I call Mabel because it makes me giggle and makes me think of a 70-year-old woman helping me code while also trying to get me to eat butter cookies from a tin) or Astra (Astrid, for most of the same reasons), you can increasingly brute-force your way through a problem.

At that point, the failure mode changes.

The problem isn't that <thing> doesn't boot, doesn't write to the database, or doesn't have a nice UI. The problem is that <thing> does ALL those things, passes your acceptance criteria, and looks suspiciously finished....but is fragile, unoptimized, difficult to reason about, or slowly freezing into a morass of code comments, design documents, and documentation trying to explain why it is the way it is.

Discipline isn't out of style. It just shows up differently than it did six months ago. Same with design taste, and probably wisdom.

We might get to the point where some of those things don't matter anymore. But it isn't today, and I bet it's not tomorrow.

## Okay but seriously Ted what have you been doing

I did ask Claude to scan my Codex and Claude sessions from the last four months. They won't surprise you:

**Improving Observability** - not surprising considering my roots, I've been ripping things out and rewiring and trying to improve them, while not (hopefully?) pissing off the guys who are already here and using some of the current signals. The idea is pretty simple: eliminate the noise, preserve the signal, and escalate only when a human (or agent!) actually adds value.

Especially with a Kubernetes backbone, a surprising amount of stupid and bad configuration shows up in logs but actually needs no action at all. Stay out of the way and let the system do what the system is good at.

**Launching a new application** - internal folks will know what I'm talking about, but I landed at harpin at the same time as our new VP of Engineering, and we got to share the journey of first greenfielding and then inheriting a legacy application and productizing it. It's been fascinating, challenging, and an amazing growth opportunity.

**Infrastructure** - sadly, harpin already had too much of its shit in one sock for me to make a major difference, but that's a good problem. I inherited a lot of really well-written and maintained architecture and infrastructure, and I've mostly been keeping the trains running on time, improving and cleaning as I go, and making small tweaks.

The part that makes me most proud is moving from "oh God how does this work" to owning production infrastructure deployments. That's probably expected for a Principal-type person, but still, it's the part I'm most proud of. Genuinely trying to improve our posture and maintainability and efficacy hits all of my reward centers. And I'm not done yet, by a long shot.

**Repeatability** - the first time I do something is usually a hero's journey. The second time I start getting bored. By the third time, I'm looking to automate it.

I'm working hard to get myself out of "boring and hard manual process" territory and into "the automation worked like it was supposed to, nothing else to do" territory. Again, it's a journey, not necessarily a destination, but it's something else that makes me very happy to think about.

**Incidents** - I think Claude throws this word around quite broadly in ways that don't really suit my own definition, but fixing broken stuff, even when the bones are as good as harpin's, is a constant chore and something that still needs a human touch. First to figure out that something is broken, usually, then to ask the right questions about how it got into that state, and then to get it into the right one.

Although if you told me four months ago that I'd be the "resident expert" in Terraform *and* Kubernetes, I'd have thought you were full of it. But I think that's mostly true now, and I don't think I even have to add a sarcastic qualifier.

I'm still learning a lot day-to-day about the systems that I "own," but I think it's gone a lot smoother than I had any right to expect and, hopefully, been less traumatic for everyone around me than I worried it might be.

Fundamentals matter. Building a strong base (thank you Robert Daniels) turns out not to have gone out of style.

## You've been busy! Put a bow on it.

I think there are two things worth saying out loud.

I sometimes joke that my job, as the aggressively stupid member of a REALLY impressive team of talented engineers, is to say the obvious thing out loud. Sometimes loudly.

I haven't worked this hard, this regularly, since I was active duty in the Navy.

I've been pinged by our HR team three separate times. I made the awesome (definitely not malicious compliance, sorry Jess) mistake of writing a script that plugged my uptime numbers into our time-tracking software.

"Is it even possible to work 120 hours a week, Ted?"

Yes. Yes it is.

Not every week. Not without some grumpiness. Not without some "yeah, I probably shouldn't have bitten off this particular problem at 3a on a Tuesday" regrets. And increasingly, probably not something I should regard as a particularly useful measure of whether I'm doing good work.

But it's been rewarding.

The second thing? I think it's worth saying that taking big risks, personally and professionally, can be incredibly rewarding.

I had a very slight background in Terraform (although a deep background in IaC, and even Opinions About IaC), and...well, I remember arguing with Anvesh Muppeda at SWBC about using ArgoCD, since it was a "different" CI/CD system than Azure DevOps.

I refuse to feel shame, even in hindsight.

But I was NOT a Kubernetes guy(tm), and I was pretty honest about that.

So when I started talking to harpin, I was frankly terrified. Not because I was worried I wouldn't get the job. I was worried I was going to turn into a nepo hire because of my buddy, especially since I was NOT an expert in their stack, even if I was familiar with lots of parts of it.

But what I did know, AWS, reliability, automation, CI/CD, failure domains, design patterns, blast radius, mattered a lot.

Especially in a world where AI can write (almost!) perfect CloudFormation, or Terraform, or Bicep, or <insert whatever weirdo IaC you can Google OMG why is there a Brainfuck fork of the AWS CDK>, the tools matter a lot less than they used to.

Use good tools. There are lots of correct options, but that also means there are still some wrong options. But the technology stack turns out to have mattered a lot less than the ability to reason about systems.

The part that matters, increasingly, is the part with a pulse: the judgment to know what matters, the humility to know when you're wrong, and the willingness to fail, learn, iterate, and keep pushing.

Stay green, my friends. But make sure that green means what you want it to mean, too.
