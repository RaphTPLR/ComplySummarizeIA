import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export const ParticleField = () => {
    const mountRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<THREE.Scene>()
    const rendererRef = useRef<THREE.WebGLRenderer>()
    const animationRef = useRef<number>()

    useEffect(() => {
        if (!mountRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        sceneRef.current = scene

        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.z = 50

        // Renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0)
        rendererRef.current = renderer
        mountRef.current.appendChild(renderer.domElement)

        // Particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 1000
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 200
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

        // Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.8,
            color: '#8B5CF6',
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        })

        // Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Animation
        let mouseX = 0
        let mouseY = 0

        const animate = () => {
            animationRef.current = requestAnimationFrame(animate)

            // Rotate particles
            particlesMesh.rotation.x += 0.001
            particlesMesh.rotation.y += 0.002

            // Mouse interaction
            particlesMesh.rotation.x += mouseY * 0.0001
            particlesMesh.rotation.y += mouseX * 0.0001

            renderer.render(scene, camera)
        }

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX - window.innerWidth / 2
            mouseY = event.clientY - window.innerHeight / 2
        }

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)

        animate()

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement)
            }
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    )
} 