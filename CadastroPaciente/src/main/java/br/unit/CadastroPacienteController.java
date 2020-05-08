package br.unit;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CadastroPacienteController {

	@PostMapping("/cadastro")
	public Boolean validarCadastro(@RequestBody String dados) throws Exception {

		if (dados != null) {

			JSONObject dadosJson = new JSONObject(dados);

			Paciente paciente = new Paciente();
			paciente.setNomeMedico(dadosJson.getString("medico"));
			paciente.setNomeMedico(dadosJson.getString("paciente"));
			paciente.setNomeMedico(dadosJson.getString("tipoSanguineo"));

			return true;
		}

		else {
			throw new Exception ("Os dados do frontend vieram vazios ou null!");
		}

	}
}
