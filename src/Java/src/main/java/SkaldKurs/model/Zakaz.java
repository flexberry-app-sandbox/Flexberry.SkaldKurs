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
 * Entity implementation class for Entity: Заказ
 */
@Entity(name = "IISSkaldKursЗаказ")
@Table(schema = "public", name = "Заказ")
public class Zakaz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаОплаты")
    private Date датаоплаты;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "ДатаОтгрузки")
    private Date датаотгрузки;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "ДатаЗаполнения")
    private Date датазаполнения;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "zakaz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<StrokaZakaza> strokazakazas;


    public Zakaz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаОплаты() {
      return датаоплаты;
    }

    public void setДатаОплаты(Date датаоплаты) {
      this.датаоплаты = датаоплаты;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public Date getДатаОтгрузки() {
      return датаотгрузки;
    }

    public void setДатаОтгрузки(Date датаотгрузки) {
      this.датаотгрузки = датаотгрузки;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
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