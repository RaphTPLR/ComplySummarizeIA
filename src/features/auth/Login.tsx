'use client'

import { useRef } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema, type LoginFormData } from "@/validators/authValidators"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useLogin } from "@/api/queries/authQueries"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/layout/Header'
import { Target, Mail, Lock, ArrowRight, Shield } from 'lucide-react'

export default function Login() {
  const loginRef = useRef<HTMLDivElement>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = async (data: LoginFormData) => {
    try {
      loginUser(data);
    } catch (error) {
      console.error(error)
    }
  }

  // Animation configuration for header
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <PageLayout>
      {/* Login Section */}
      <section ref={loginRef} className="relative z-10 px-6 py-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Login Card */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h1
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Connexion
              </motion.h1>
              
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Accédez à ComplySummarize IA
              </motion.p>
            </div>

            {/* Login Form */}
            <motion.form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Adresse email
                </label>
                <div className="relative">
                  <Input
                    label=""
                    type="email"
                    {...register("email")}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Mot de passe
                </label>
                <div className="relative">
                  <Input
                    label=""
                    type="password"
                    {...register("password")}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || isPending}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 group"
              >
                {isSubmitting || isPending ? (
                  <span className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Connexion en cours...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Se connecter
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>

              {/* Register Link */}
              <div className="text-center pt-4">
                <p className="text-gray-400 text-sm">
                  Pas encore de compte ?{' '}
                  <Link
                    to="/register"
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                  >
                    Créer un compte
                  </Link>
                </p>
              </div>
            </motion.form>

            {/* Security Notice */}
            <motion.div
              className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                <span>
                  Connexion sécurisée avec chiffrement bout-en-bout
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="text-gray-500 text-sm">
              En vous connectant, vous acceptez nos{' '}
              <Link to="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                conditions d'utilisation
              </Link>
              {' '}et notre{' '}
              <Link to="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                politique de confidentialité
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}

