package SkaldKurs.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import SkaldKurs.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТоварНаСкладе
 */
@Entity(name = "IISSkaldKursТоварНаСкладе")
@Table(schema = "public", name = "ТоварНаСкладе")
public class TovarNaSklade {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Этаж")
    private String этаж;

    @Column(name = "Ряд")
    private String ряд;

    @Column(name = "ЯчейкаТовара")
    private String ячейкатовара;

    @Column(name = "Количество")
    private String количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tovar")
    @Convert("Tovar")
    @Column(name = "Товар", length = 16, unique = true, nullable = false)
    private UUID _tovarid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tovar", insertable = false, updatable = false)
    private Tovar tovar;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sklad")
    @Convert("Sklad")
    @Column(name = "Склад", length = 16, unique = true, nullable = false)
    private UUID _skladid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sklad", insertable = false, updatable = false)
    private Sklad sklad;


    public TovarNaSklade() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЭтаж() {
      return этаж;
    }

    public void setЭтаж(String этаж) {
      this.этаж = этаж;
    }

    public String getРяд() {
      return ряд;
    }

    public void setРяд(String ряд) {
      this.ряд = ряд;
    }

    public String getЯчейкаТовара() {
      return ячейкатовара;
    }

    public void setЯчейкаТовара(String ячейкатовара) {
      this.ячейкатовара = ячейкатовара;
    }

    public String getКоличество() {
      return количество;
    }

    public void setКоличество(String количество) {
      this.количество = количество;
    }


}