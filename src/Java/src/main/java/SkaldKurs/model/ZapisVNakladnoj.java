package SkaldKurs.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SkaldKurs.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаписьВНакладной
 */
@Entity(name = "IISSkaldKursЗаписьВНакладной")
@Table(schema = "public", name = "ЗаписьВНакладной")
public class ZapisVNakladnoj {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Сумма")
    private Double сумма;

    @Column(name = "Количество")
    private Integer количество;

    @Column(name = "Цена")
    private Double цена;

    @Column(name = "Вес")
    private Double вес;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Nakladnaya")
    @Convert("Nakladnaya")
    @Column(name = "Накладная", length = 16, unique = true, nullable = false)
    private UUID _nakladnayaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Nakladnaya", insertable = false, updatable = false)
    private Nakladnaya nakladnaya;


    public ZapisVNakladnoj() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }

    public Double getЦена() {
      return цена;
    }

    public void setЦена(Double цена) {
      this.цена = цена;
    }

    public Double getВес() {
      return вес;
    }

    public void setВес(Double вес) {
      this.вес = вес;
    }


}