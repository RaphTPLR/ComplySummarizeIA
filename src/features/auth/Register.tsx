'use client'

import { useRef, useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema, type RegisterFormData } from "@/validators/authValidators"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useRegister } from "@/api/queries/authQueries"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { PageLayout } from '@/components/layout/PageLayout'
import { Header } from '@/components/layout/Header'
import { Target, Mail, Lock, ArrowRight, Shield, User, ChevronLeft, Check } from 'lucide-react'

export default function Register() {
  const registerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(1)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    getValues
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange'
  })

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      registerUser(data);
    } catch (error) {
      console.error(error)
    }
  }

  const nextStep = async () => {
    if (currentStep === 1) {
      // Validate first step fields
      const isValid = await trigger(['firstName', 'lastName', 'email'])
      if (isValid) {
        setCurrentStep(2)
      }
    }
  }

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1)
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

  const stepVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  }

  return (
    <PageLayout>
      {/* Register Section */}
      <section ref={registerRef} className="relative z-10 px-6 py-20 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-md w-full">
          {/* Register Card */}
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
                Inscription
              </motion.h1>
              
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Rejoignez ComplySummarize IA
              </motion.p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 1 ? 'bg-purple-500 border-purple-500' : 'border-gray-500'
                } transition-all duration-300`}>
                  {currentStep > 1 ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-white' : 'text-gray-500'}`}>1</span>
                  )}
                </div>
                <div className={`w-12 h-0.5 ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-500'} transition-all duration-300`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  currentStep >= 2 ? 'bg-purple-500 border-purple-500' : 'border-gray-500'
                } transition-all duration-300`}>
                  <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-white' : 'text-gray-500'}`}>2</span>
                </div>
              </div>
            </div>

            {/* Register Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Informations personnelles</h3>
                      <p className="text-sm text-gray-400">Commençons par vos informations de base</p>
                    </div>

                    {/* Name Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          <User className="w-4 h-4 inline mr-2" />
                          Prénom
                        </label>
                        <div className="relative">
                          <Input
                            label=""
                            {...register("firstName")}
                            placeholder="Jean"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-400">{errors.firstName.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">
                          <User className="w-4 h-4 inline mr-2" />
                          Nom
                        </label>
                        <div className="relative">
                          <Input
                            label=""
                            {...register("lastName")}
                            placeholder="Dupont"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-400">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>
                    </div>

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

                    {/* Next Button */}
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center">
                        Continuer
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold text-white mb-2">Sécurité du compte</h3>
                      <p className="text-sm text-gray-400">Choisissez un mot de passe sécurisé</p>
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

                    {/* Confirm Password Input */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        <Lock className="w-4 h-4 inline mr-2" />
                        Confirmer le mot de passe
                      </label>
                      <div className="relative">
                        <Input
                          label=""
                          type="password"
                          {...register("confirmPassword")}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="secondary"
                        className="flex-1 border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 py-3 px-6 rounded-xl transition-all duration-300"
                      >
                        <span className="flex items-center justify-center">
                          <ChevronLeft className="w-5 h-5 mr-2" />
                          Retour
                        </span>
                      </Button>

                      <Button
                        type="submit"
                        disabled={isSubmitting || isPending}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 group"
                      >
                        {isSubmitting || isPending ? (
                          <span className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Inscription...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <Shield className="w-5 h-5 mr-2" />
                            Créer le compte
                          </span>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Login Link */}
              <div className="text-center pt-4">
                <p className="text-gray-400 text-sm">
                  Déjà un compte ?{' '}
                  <Link
                    to="/login"
                    className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </form>

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
                  Données protégées avec chiffrement bout-en-bout
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
              En créant un compte, vous acceptez nos{' '}
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

