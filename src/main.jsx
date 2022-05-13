import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import App from './App'
import './index.css'
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} >
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <h3>Select an invoice</h3>
            </main>
          }
        />
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h3>Não há nada aqui!!</h3>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
