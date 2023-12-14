package SkaldKurs.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SkaldKurs.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Документ
 */
@Entity(name = "IISSkaldKursДокумент")
@Table(schema = "public", name = "Документ")
public class Dokument {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаЗаполнения")
    private Date датазаполнения;

    @Column(name = "Номер")
    private Integer номер;


    public Dokument() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаЗаполнения() {
      return датазаполнения;
    }

    public void setДатаЗаполнения(Date датазаполнения) {
      this.датазаполнения = датазаполнения;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}