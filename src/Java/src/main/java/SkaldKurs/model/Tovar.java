package SkaldKurs.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SkaldKurs.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товар
 */
@Entity(name = "IISSkaldKursТовар")
@Table(schema = "public", name = "Товар")
public class Tovar {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодТовара")
    private Integer кодтовара;

    @Column(name = "Название")
    private String название;

    @Column(name = "ЕдиницаИзмерения")
    private String единицаизмерения;

    @Column(name = "Описание")
    private String описание;

    @Column(name = "Цена")
    private Double цена;


    public Tovar() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодТовара() {
      return кодтовара;
    }

    public void setКодТовара(Integer кодтовара) {
      this.кодтовара = кодтовара;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getЕдиницаИзмерения() {
      return единицаизмерения;
    }

    public void setЕдиницаИзмерения(String единицаизмерения) {
      this.единицаизмерения = единицаизмерения;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }


}