package com.criticalblue.reactnative;

import okhttp3.CertificatePinner;

public class GeneratedCertificatePinner {
    public static CertificatePinner instance() {
        CertificatePinner.Builder builder = new CertificatePinner.Builder();

        builder.add("*.backendsportunity2017.com", "sha256/QvbOLo6Zcwqm6+Ph4h+cFlBKI19s62KPaahC4sT76Mk=");
        builder.add("*.backendsportunity2017.com", "sha256/8Rw90Ej3Ttt8RRkrg+WYDS9n7IS03bk5bjP/UXPtaY8=");
        builder.add("*.backendsportunity2017.com", "sha256/Ko8tivDrEjiY90yGasP6ZpBU4jwXvHqVvQI0GS3GNdA=");
        builder.add("*.backendsportunity2017.com", "sha256/VjLZe/p3W/PJnd6lL8JVNBCGQBZynFLdZSTIqcO0SJ8=");

        return builder.build();
    }
}
