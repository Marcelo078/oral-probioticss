import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Shield, Truck, Award, Users } from "lucide-react";
import prodentim3Bottle from "@/assets/prodentim-3-bottle.png";
import prodentim2Bottle from "@/assets/prodentim-2-bottle.png";
import prodentim6Bundle from "@/assets/prodentim-6-bottle-bundle.png";
import prodentimStrawberry from "@/assets/prodentim-strawberry-flavor.png";
import prodentimProbiotic from "@/assets/prodentim-probiotic-formula.png";

const AFFILIATE_LINK = "https://6d59d9cb4yk93u1iuig4rrj78n.hop.clickbank.net";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground">
                #1 Oral Probiotic Supplement
              </Badge>
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                ProDentim: Advanced Oral Probiotics
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Experience the power of 3.5 billion probiotic strains specially formulated to support healthy teeth, gums, and fresh breath naturally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">Clinically researched formula for dental health</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">Long-lasting fresh breath guarantee</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">Supports ear, nose, and throat health</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Get ProDentim Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
                  <a href="#pricing">View Pricing</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by over 95,000+ customers
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={prodentim3Bottle}
                alt="ProDentim Advanced Oral Probiotics - 3 Bottle Pack"
                className="mx-auto w-full max-w-lg drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">60-Day Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Award className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">FDA Registered</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">95,000+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Why Choose ProDentim?
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              ProDentim is unlike anything you've ever tried. It's the only product that combines 3.5 billion probiotics with unique nutrients designed to repopulate your mouth with good bacteria.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Healthy Teeth & Gums
                </h3>
                <p className="text-muted-foreground">
                  Support the health of your teeth and gums with powerful probiotic strains.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Fresh Breath
                </h3>
                <p className="text-muted-foreground">
                  Enjoy long-lasting fresh breath that gives you confidence all day.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  ENT Support
                </h3>
                <p className="text-muted-foreground">
                  Supports ear, nose, and throat health naturally with beneficial bacteria.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Immune Health
                </h3>
                <p className="text-muted-foreground">
                  Boost your immune system with scientifically-backed probiotic strains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src={prodentimProbiotic}
                alt="ProDentim Probiotic Formula with Strawberry Flavor"
                className="mx-auto w-full max-w-md drop-shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                How Does ProDentim Work?
              </h2>
              <p className="text-lg text-muted-foreground">
                Recent research has shown that good teeth and gums are not just about hygiene—they're about having the right balance of bacteria in your mouth.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Repopulate Good Bacteria</h3>
                    <p className="text-muted-foreground">
                      3.5 billion probiotic strains work to restore balance in your oral microbiome.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Support Dental Health</h3>
                    <p className="text-muted-foreground">
                      Unique nutrients support the strength and health of your teeth and gums.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Maintain Fresh Breath</h3>
                    <p className="text-muted-foreground">
                      Natural ingredients keep your breath fresh and your confidence high.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild variant="cta" size="lg">
                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                  Try ProDentim Risk-Free
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Join thousands of satisfied customers who have transformed their oral health with ProDentim.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-foreground">
                  "I've never felt more confident about my smile. My gums look healthier and my breath stays fresh all day!"
                </p>
                <div className="font-semibold text-foreground">Sarah M.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-foreground">
                  "After just a few weeks, I noticed a real difference. My teeth feel cleaner and my dentist was impressed!"
                </p>
                <div className="font-semibold text-foreground">James T.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-foreground">
                  "This product is amazing! Natural, effective, and easy to use. I recommend it to everyone I know."
                </p>
                <div className="font-semibold text-foreground">Emily R.</div>
                <div className="text-sm text-muted-foreground">Verified Customer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Package
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Select the best option for you. All packages come with our 60-day money-back guarantee.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <img
                  src={prodentimStrawberry}
                  alt="ProDentim 1 Bottle - 30 Day Supply"
                  className="mx-auto mb-4 w-48"
                  loading="lazy"
                />
                <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                  1 Bottle
                </h3>
                <p className="mb-4 text-center text-muted-foreground">30 Day Supply</p>
                <div className="mb-4 text-center">
                  <span className="text-4xl font-bold text-foreground">$69</span>
                  <span className="text-muted-foreground">/bottle</span>
                </div>
                <Button asChild variant="cta" size="lg" className="w-full">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-4 border-accent shadow-xl transition-shadow hover:shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent px-4 py-1 text-accent-foreground">
                  MOST POPULAR
                </Badge>
              </div>
              <CardContent className="p-6">
                <img
                  src={prodentim3Bottle}
                  alt="ProDentim 3 Bottles - 90 Day Supply - Best Value"
                  className="mx-auto mb-4 w-48"
                  loading="lazy"
                />
                <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                  3 Bottles
                </h3>
                <p className="mb-4 text-center text-muted-foreground">90 Day Supply</p>
                <div className="mb-4 text-center">
                  <span className="text-4xl font-bold text-foreground">$59</span>
                  <span className="text-muted-foreground">/bottle</span>
                  <div className="mt-1 text-sm text-success">Save $30!</div>
                </div>
                <Button asChild variant="cta" size="lg" className="w-full">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <img
                  src={prodentim6Bundle}
                  alt="ProDentim 6 Bottles - 180 Day Supply - Maximum Savings"
                  className="mx-auto mb-4 w-48"
                  loading="lazy"
                />
                <h3 className="mb-2 text-center text-2xl font-bold text-foreground">
                  6 Bottles
                </h3>
                <p className="mb-4 text-center text-muted-foreground">180 Day Supply</p>
                <div className="mb-4 text-center">
                  <span className="text-4xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground">/bottle</span>
                  <div className="mt-1 text-sm text-success">Save $120!</div>
                </div>
                <Button asChild variant="cta" size="lg" className="w-full">
                  <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  How do I take ProDentim?
                </h3>
                <p className="text-muted-foreground">
                  Simply chew one soft tablet every morning to support your oral health. For best results, use consistently.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Is ProDentim safe?
                </h3>
                <p className="text-muted-foreground">
                  Yes! ProDentim is made in an FDA-registered facility following GMP guidelines. All ingredients are natural and carefully selected for safety and effectiveness.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  What if ProDentim doesn't work for me?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 60-day money-back guarantee. If you're not satisfied with your results, simply contact us for a full refund—no questions asked.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  How long until I see results?
                </h3>
                <p className="text-muted-foreground">
                  While individual results vary, most users report fresher breath within days and improved oral health within weeks of consistent use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Transform Your Oral Health?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join over 95,000 satisfied customers. Try ProDentim risk-free today!
          </p>
          <Button asChild variant="cta" size="xl">
            <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
              Get ProDentim Now
            </a>
          </Button>
          <p className="mt-6 text-sm opacity-75">
            60-Day Money-Back Guarantee • Free Shipping on Multi-Bottle Packages
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ProDentim. All rights reserved. This site is not part of the Facebook website or Facebook Inc.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Results may vary. Statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
