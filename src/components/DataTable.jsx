export default function DataTable() {
  return (
    <section className="data-table">
      <h2>Registros recientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Actividad</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>001</td>
            <td>Juan</td>
            <td>Login</td>
            <td>2025-02-18</td>
          </tr>
          <tr>
            <td>002</td>
            <td>María</td>
            <td>Actualizó perfil</td>
            <td>2025-02-17</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Pedro</td>
            <td>Generó reporte</td>
            <td>2025-02-16</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
