package assistancequotidienne2.assistancequotidienne2.Repositories;

import assistancequotidienne2.assistancequotidienne2.Entities.RapportHebdomadaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RapportHebdomadaireRepository extends JpaRepository<RapportHebdomadaire, Long> {
    List<RapportHebdomadaire> findByPatientId(Long patientId);
    List<RapportHebdomadaire> findByPatientIdOrderByDateDebutDesc(Long patientId);
    List<RapportHebdomadaire> findBySoignantId(Long soignantId);
    List<RapportHebdomadaire> findByEnvoyeAuMedecin(Boolean envoyeAuMedecin);
}
