package SkaldKurs.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SkaldKurs.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Накладная
 */
@Entity(name = "IISSkaldKursНакладная")
@Table(schema = "public", name = "Накладная")
public class Nakladnaya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Примечание")
    private String примечание;

    @Column(name = "ДатаОтгрузки")
    private Date датаотгрузки;

    @Column(name = "Вес")
    private Double вес;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "ФИОПолучателя")
    private String фиополучателя;

    @Column(name = "ДатаЗаполнения")
    private Date датазаполнения;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zakaz")
    @Convert("Zakaz")
    @Column(name = "Заказ", length = 16, unique = true, nullable = false)
    private UUID _zakazid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zakaz", insertable = false, updatable = false)
    private Zakaz zakaz;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "nakladnaya", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapisVNakladnoj> zapisvnakladnojs;


    public Nakladnaya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПримечание() {
      return примечание;
    }

    public void setПримечание(String примечание) {
      this.примечание = примечание;
    }

    public Date getДатаОтгрузки() {
      return датаотгрузки;
    }

    public void setДатаОтгрузки(Date датаотгрузки) {
      this.датаотгрузки = датаотгрузки;
    }

    public Double getВес() {
      return вес;
    }

    public void setВес(Double вес) {
      this.вес = вес;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public String getФИОПолучателя() {
      return фиополучателя;
    }

    public void setФИОПолучателя(String фиополучателя) {
      this.фиополучателя = фиополучателя;
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