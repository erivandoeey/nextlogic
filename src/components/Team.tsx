import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Rodrigo Bernardo",
    role: "Technical Writer / Designer",
  },
  {
    name: "Adryan Rian",
    role: "Product Owner / Quality Assurance / Marketing",
  },
  {
    name: "Erivando Ferreira",
    role: "Software Engineer / Quality Assurance",
  },
  {
    name: "Pedro Henrique",
    role: "Software Engineer",
  },
  {
    name: "Victor Vinicius",
    role: "Technical Writer",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Quem Somos
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Uma equipe multidisciplinar de especialistas apaixonados por tecnologia e inovação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-border/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <User className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-3" />
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
