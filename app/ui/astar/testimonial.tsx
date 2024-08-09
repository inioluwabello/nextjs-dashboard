import AstarLogo from '@/app/ui/astar-logo'
import styles from '@/app/ui/home.module.css';
import TestimonialCard from './TestimonialCard';

export default function Testimonial() {

    
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Former VP of Global Sales Global Comput',
      text: `"Astar piqued my interest in the potential of combining AI and analog IC design. Analog ICs offer a huge opportunity for AI applications, especially for a huge market of edge devices and sensors that need low power and fast processing for inference. AI powered IC design can also unlock new possibilities and architectures for analog ICs, such as in-memory computing, neuromorphic computing, and analog AI accelerator."`,
      image: '/astar/client1.png',
    },
    {
      name: 'Ray Micheal',
      title: 'Founder of Unethical AI',
      text: `"Having built the bulk of my career on analog and custom IC design for 3 decades, I know first-hand the unsatiable need to improve the efficiency of making circuit layouts. While other companies for decades have tried to solve this problem without major success, Astar’s application of deep reinforcement learning may finally be the solution to the sought-after layout problem"`,
      image: '/astar/client2.png',
    },
    {
      name: 'Kate Abraham',
      title: 'Director of ASIC Engineering (Stathera & Intel)',
      text: `"You really hit the nail on the head with..."`,
      image: '/astar/client3.png',
    },
  ];

  return (
        <section>
          <div className={styles.LeadText}>
            <div>
              <h1 className={styles.h1Lead}>What our clients say</h1>
              <p style={{fontSize: "10px", paddingBottom: "10px"}}>
                A peak at some of the testimonials and reviews our clients have to say.</p>
            </div>
            <div>
              <img src="/astar/success-stories.png" alt="Success Stories" style={{cursor: "pointer", width: "200px"}} />
            </div>
          </div>
          
          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
          <div className={styles.spacer1}></div>
        </section>
  );
}


