import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS301",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    description: "An in-depth study of fundamental data structures including arrays, linked lists, trees, graphs, and their associated algorithms. Covers sorting, searching, and complexity analysis.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "MATH210",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Introduction to vector spaces, linear transformations, matrices, determinants, eigenvalues and eigenvectors. Applications to systems of linear equations and least squares problems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Introduction to Quantum Mechanics",
    department: "Physics",
    description: "Fundamental principles of quantum mechanics including wave-particle duality, Schrödinger equation, quantum states, and measurement theory. Laboratory component included.",
    createdAt: new Date().toISOString(),
  }
];