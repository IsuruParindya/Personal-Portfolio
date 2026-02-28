import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, Linkedin, Twitter, Dribbble, Github, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Submission:', data);
    toast.success("Message transmitted successfully!");
    reset();
  };

  return (
    <section id="hire-me" className="py-24 px-6 bg-white dark:bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
              Let's build something <br />
              <span className="text-purple-600 underline decoration-purple-200/30 underline-offset-8 italic">together.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 font-light leading-relaxed max-w-md">
              Whether you have a fully-formed idea or just a spark of inspiration, I'm here to help you bring it to life.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">hello@arivera.design</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Location</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-150 dark:border-slate-800 shadow-2xl shadow-purple-500/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Name</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <input
                  {...register('subject', { required: true })}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-150 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
                  placeholder="Tell me about your vision..."
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-5 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-xl shadow-purple-500/20"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#0a0a1f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-purple-600 flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-purple-500/20">P</div>
          <span className="font-black text-slate-900 dark:text-white tracking-widest text-lg">Parindya</span>
        </div>
        
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Isuru Parindya. All rights reserved.
          </p>
          <p className="text-slate-300 dark:text-slate-700 text-[10px] font-black uppercase tracking-[0.3em]">
            Precision Engineering • Purposeful Design
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
          <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
          <SocialLink href="#" icon={<Dribbble className="w-5 h-5" />} />
          <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-600 transition-all duration-300 border border-transparent hover:border-purple-100 dark:hover:border-purple-800"
  >
    {icon}
  </a>
);