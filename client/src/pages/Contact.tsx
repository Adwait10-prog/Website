import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Facebook, Twitter, Globe, HandHeart } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // This is just UI demonstration - no actual backend submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-accent text-gray-800 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Your comments and suggestions make my thoughts even clearer, better. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm available for business consulting, mentoring, and speaking engagements. If you're interested in discussing opportunities for collaboration, I welcome your message.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:hello@madhavdabke.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                    contact@madhavdabke.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400 mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Global Consultant</h4>
                  <p className="text-gray-600 dark:text-gray-300">Working with clients across 50+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400 mr-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">LinkedIn</h4>
                  <a href="https://linkedin.com/in/madhavdabke" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors">
                    linkedin.com/in/madhavdabke
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary dark:text-blue-400 mr-4">
                  <HandHeart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Mentorship</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Open to mentoring and contributing to educational initiatives
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://linkedin.com/in/madhavdabke" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-blue-500 rounded-full text-gray-600 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-blue-500 rounded-full text-gray-600 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-blue-500 rounded-full text-gray-600 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-blue-500 rounded-full text-gray-600 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send Me a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          {...field} 
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 dark:text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          {...field} 
                          rows={5}
                          className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 dark:text-white resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-6 py-6 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg dark:shadow-blue-500/20"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
