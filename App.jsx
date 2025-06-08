
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const machinery = [
  {
    id: 1,
    name: "Camión de extracción CAT 785G",
    type: "Camión de alto tonelaje",
    location: "Antofagasta, Chile",
    price: "$8.000 USD / día",
    status: "Disponible",
  },
  {
    id: 2,
    name: "Retroexcavadora Komatsu PC200",
    type: "Excavadora",
    location: "Arequipa, Perú",
    price: "$3.500 USD / día",
    status: "Disponible",
  },
  {
    id: 3,
    name: "Perforadora Atlas Copco DM45",
    type: "Perforadora",
    location: "Cajamarca, Perú",
    price: "$6.000 USD / día",
    status: "Arrendada",
  },
];

export default function MineRentPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-10"
      >
        MineRent AI - Arriendo Inteligente de Maquinaria Minera
      </motion.h1>

      <div className="max-w-4xl mx-auto mb-10">
        <Input placeholder="Buscar por tipo, ubicación o equipo..." className="p-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {machinery.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-sm text-gray-600 mb-1">Tipo: {item.type}</p>
                <p className="text-sm text-gray-600 mb-1">Ubicación: {item.location}</p>
                <p className="text-sm text-gray-800 font-medium">{item.price}</p>
                <p className={\`text-sm mt-2 \${item.status === "Disponible" ? "text-green-600" : "text-red-600"}\`}>
                  {item.status}
                </p>
                <Button className="mt-4 w-full" disabled={item.status !== "Disponible"}>
                  {item.status === "Disponible" ? "Solicitar Arriendo" : "No Disponible"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
