// ============================================================
// CONTENT DATA
// To add new work later: copy an existing entry's pattern below
// and add it to the matching array. That's it — the page will
// render it automatically.
// ============================================================

const POEMS = [
  {
    title: "The Sun, the Moon, and Polaris",
    dedication: "",
    body: `Sure as the Earths elliptic dance
sherbet rays, condition the spectators gaze
clarity gifted for the do's and can'ts
irrefutable evidence leave none at chance
permanent warm, the gift of our days

Black woods, whispering sonic hints
cabins or wolf dens, I'm no less for wear
twisted lemon skins, gin, or a fresh spring to drink
our stems and roots, turned marbled floors pink
like the lessons learned, you are always there

Rowing north, on a river hungry to find south
almost vengefully, ready to take anything with it
sending well wishes to a place beyond the clouds
no signs of life, but not a shred of doubt
the costly ebbs and flows of a free spirit

Steady rocks, and building blocks, up and down the slippery slope
like traffic lights, on the highway of life
reality laced with entropy, I've found my way to cope
the Northstar in my pursuit of happiness and hope
allows for faith, in my days and nights`
  },
  {
    title: "The Red String",
    dedication: "",
    body: `Thousands of days have passed
I've seen the moon in all its phases
every word i said, still true
the only change is my rapidly growing belief in them

thousands of years to go
until we see the cosmic cloud
of our morphed constellations
where we can determine, after, through it all, was it worth it?

the eye of the storm, can see the fault of our flawed logics
and thus, will promptly reign down upon us
we will see that we are stronger together
the only force greater than this discourse from opposite sides of the world

i keep thinking i'd forget, only for my memories to continue to grow deeper
like sunken treasure that found a new home on the blue ocean floor
Doppler's red-shift proves our universe is ever expanding
the red string that attaches us, proves it was always meant to be`
  },
  {
    title: "La Garza Roja",
    dedication: "Dedicated to my dear Uncle, GRROOSM",
    body: `Standing at the world's end, where land becomes sea
deciding if I should run back or swim forward
I made up my mind a long time ago.
I've spent enough time wondering if what I learned is fact or fiction

I've opened my eyes in a new world
where what you want becomes need, and what you needed became luxury
where canaries sing the songs old as time and across the isle, a siege of red herons

An unpopulated utopia, that man has left unspoiled
unfazed by the very idea of inequity
offering an abundance of resource and opportunity
all seemingly within arms reach

Although, an uncanny resemblance to reality
a palpable shift from every ideology I'd ever known
where constant confusion is replaced by common sense
and hunger turned to satisfaction, but never tipped over into greed

Be it a dream or a new paradise
I find myself with a new love for the sun, though it beams just the same
time moves as always, relatively, but I feel no need to rush
no other thoughts or opinions around, thus no need to defend mine

In reality, I stand on the exact two feet I always stood
with the same world around me, unbalanced but looking for justice
the truth is the red heron always existed
it was my idea of perfection that was wrong`
  },
  {
    title: "The Ghost of Room #143",
    dedication: "",
    body: `Pain has reached its peak, the mortality of love is apparent and growing weaker by the day
The spirit of hope has passed through dimensions of uncertainty and suffering
all the kind words exchanged deemed as evanescence
those same fugacious words we will continue chasing through the rabbit hole

This place that we are in, this purgatory, is haunted by memories..
some good, some bad and some worse
still.. i find myself attracted to the same place where i learned what I have been neglecting my whole life
love is utopian, and couldn't be further from what we imagine

Four walls of eternal grey
not a window in sight to lighten the dreary despair
thinking of the times when i could look at the limitless sky,
and think of it as something more than just a portal away from this melancholic doom

If these walls could speak.. they would scream
and if they could see, they would avert their eyes to this tragedy that masqueraded as destiny for so long
every lie that was said has come with consequence
the sins so selfishly casted, will be judged.. fairly or not

An unspecified force keeps dragging us in the same circular motion
we can't seem to let go
well.. except the evil thoughts and words we have for one another
all to end in "i love you" or "i'm sorry"
all synonymous as far as we're concerned

That word.. love.. the pain and confusion that it has bestowed on mankind
past, present and future
maybe it does exist, but not here.. in this allegoric cave
i could still smell that scent, of optimism for new love, but all i see is black, i taste the bitter words, all i feel is cold, and all i hear is the ghost that calls my name`
  },
  {
    title: "Taurus ♉",
    dedication: "",
    body: `You're the only star I could see through all the city lights
through the emerald glare, almost cautioning, to enter at my own risk
like running through the Pamplona streets of Spain
and a herd of bulls, waiting for the mistake

the signs are there
but this feeling I have is here too, which is even stronger
an infinite amount of worlds, but this is my favorite
because here, you're within arms reach, or at least a dream away

the bloom of the flower moon
where hope springs eternal
what will the ending to our story be?
the cruel truth is that it'll be with heartbreak, but with how much happiness in between?

perhaps if it were easy, I wouldn't feel the same
whatever the reason is, I'm thankful
maybe one day I'll tell you the rest
or maybe one day, I'll forget`
  },
  {
    title: "Sonnet III (Suffer In Silence)",
    dedication: "",
    body: `It's not your fault I've fallen in love
in fact, it's none of your business
before it even began, it's already finished
the serial killer to what I've always dreamed of

Risk well worth the reward
but try convincing me of my own words
a winless battle, truly my life's curse
I won't do anything about that, of course

I don't go around in pity
I've accepted all of my imperfections
I've made gold out of all those bitter lessons
there'll come a day where I'll see how far it'll get me

but back to you, where the affection I hold lives in my mind with a quiet violence
I can't burden you with that, so I'll suffer in silence`
  },
  {
    title: "I Need A Muse",
    dedication: "",
    body: `I need a muse
like a bird needs wind underneath its wings
so it can see the world, collecting tales
to make the most of such limited time

I need a muse
like the soul needs its freedom
so it can grow, and understand about life, the things that really matter
so it can live in the moment, which however fleeting, is the most important

I need a muse
like the fish in a river needs the current
their only chance to shoot past any that view them as prey
that same water they use as shelter, they use to eat, sleep, and breathe

I need a muse
to restore and maintain this illusion of love
to personify the parable of what it truly could be
I need you, and without you, life would truly be one dimensional`
  },
  {
    title: "Let's Just Keep Things As They Are",
    dedication: "",
    body: `Lets just keep things as they are
In a perfectly balanced limbo
where everything about you, are all the things I've ever wanted
and all the things you've said, are like a song playing in my mind

If things go right..
I could watch you walk into the room covered in white satin, that would make me wish for cloudier days
we could share a love so deep, it would multiply and resemble us for generations
our last breathe would be one of satisfaction, as we loved and were loved

if things went left..
cognitive dissonance would protect us from all the beauty, only reminding us of the end
all the laughter would be replaced, with raised voices, and an ice cold silence
resentment would over power the ability to wish each other well, and "no hard feelings" would be nothing but a lie

Let's keep things as they are
where you are the loveliest soul I'd ever come across
you renewed my faith in love, and have proven its existence, beyond a reasonable doubt
maybe when our time comes, we'll be a world away, for better or worse, right or wrong
your impact will never fade, and your memory preserved in immortality`
  },
  {
    title: "Hope Springs Internal",
    dedication: "",
    body: `I'm looking forward to the journey, more than the destination
like a maple tree, a century along
no fear of the wind or the snow
knowing all the lost leaves will regrow

off of any grid, with no navigation
radars won't detect, a compass won't help
even as naturally as I find these words
I can't help but feel the beauty of freedom, comes cast with a curse

the dichotomy of life and death
is no longer as contrasting as it once seemed
I want this feeling to last, naturally lost forever, I never minded
X marks the spot, but I'm hoping I never find it

if its love that I breathe, as if being recycled by the leaves
its now that I see, this feeling will never leave
I fall to my knees, looking for the answer in the breeze
if we are not meant to be, someone else will come along, agreed?`
  },
  {
    title: "The Black Rose",
    dedication: "",
    body: `There once was a flower
so endlessly strong
it thought it could take on the world
and leave with no harm

the right was always left
the right was always wrong
a howling wind always against it
normal always seemed so different

though the seasons always changed
the rose itself stayed consistent
the nourishing rain, reached out its hands
the protective sun, watched from a distance

in swept a snow so cold, that it froze
the winter stormed with no pardon
but in the melted ice, stood the black rose standing alone in the garden`
  }
];

const ESSAYS = [
  {
    title: "The 99%",
    body: `Our technological advances will continue. The advancements in medicine will continue as incrementally as deemed necessary, by those in charge. All of the things necessary to survive and innovate will continue to surge.

However, our ability to create freely will become stifled. Our ability to live as we please as individuals, as well as our humanity, will dissipate.

We can blame the world powers, the fortune 500 companies and those who run them, we can blame the rich and celebrities. Although, the truth is society at large is just as much to blame. Not all of us, but most of us, and that's more than enough.

History has taught us revolution against the top is how we ameliorate as a civilization, this time though, what I think is necessary first and foremost, is an evolution within ourselves.`
  }
];

const QUOTES = [
  "Love is mans greatest achievement, and should be treated as such. It is something that can happen, not something that inevitably will.",
  "The sun after a storm, feels better than a vacation to paradise.",
  "The best any of us can do is remain blissfully ignorant, entranced in a state of epistemic ambivalence. The truth is the burden of the enlightened.",
  "If you reach a fork in the road, understand the only wrong way is going back.",
  "True love is so powerful, that it has a placebo effect. If you get close enough to it, it could feel so strong, that you may even mistake it for the real thing.",
  "You don't choose the person you fall in love with, your heart does that for you.",
  "An infinite amount of worlds, but this is my favorite, because here, you're within arms reach, or at least a dream away.",
  "Careful with the tragedy masquerading as destiny.",
  "Your reality is as important, or more so, than anyone else's.",
  "The slow descent into madness, or as some call it, falling in love.",
  "Loneliness and peace are the ebbs and flows of a free spirit.",
  "The biggest mistake we make, is underestimating other people's intelligence.",
  "No one knows if romantic love was an invention or a discovery, but everyone should know it's a miracle.",
  "Math, Science, Literature, and History are the foundations of an academically educated individual. Philosophy and Psychology the foundations of an emotionally educated individual.",
  "To reach complete internal peace, you must have an elevated level of understanding those around you.",
  "Don't romanticize the idea of love so much, that the real thing becomes underwhelming.",
  "If life lets you turn strangers into family, then the inverse is equally true and likely.",
  "Problems of today will be buried by the sands of time.",
  "Every generation thinks the next generation is the one that will ruin the world, in reality every generation is paying for the sins of all the generations that came before.",
  "With enlightenment comes indifference, with indifference comes solace.",
  "It is only the extremities of good and evil that follow us, for thousands of years passed our demise.",
  "Your ego is the space between your heart and soul.",
  "Paranoia, at times, can be the quickest route to enlightenment.",
  "Forced diversity is segregation masquerading as equality.",
  "Imperfections, unnoticed and unmanaged, can become injustices.",
  "Your mind plans ahead, but the heart only responds.",
  "Some people need to be followers, other people need to be leaders. Some need to be innovators, others need to be renovators. We need people to build, and we need people to destroy.",
  "The ignorant see the world in black and white, the creatives and intellects see the world in shades of grey. The enlightened are who see the world in color.",
  "Any true story is worth being told.",
  "Reality is certainty laced with entropy.",
  "Imperfection is a prerequisite of interesting.",
  "Love has no limits or bounds, it has no rules or guidelines.. it's infinite and eternal.",
  "The only thing harder than climbing a mountain, is the idea of it.",
  "When two hearts become one, two minds become one as well.",
  "People tell you a lot with their words, but they tell you everything with their eyes.",
  "Every limit is imaginary or man-made.",
  "A good bit of unwritten rules, are even more important than the ones carved into stone.",
  "Time like everything else is relative, and it is the very thing that makes us all equal. No matter how many people try to avoid that very simple and obvious truth."
];
